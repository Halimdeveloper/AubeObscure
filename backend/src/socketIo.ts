import { Socket } from "socket.io";
import { getTripleDiceScore } from "./function/getDice";
import Logger from "./lib/winston";
import Game, { IGame } from "./models/Game";
import updatedEnemyCharacterEvent from "./models/history/EnemyCharacterEvent";
import { EnemyCharacter } from "./models/characters/EnemyCharacter";

const setupSocketIO = (io: any) => {
  io.on("connection", (socket: Socket) => {
    // Log all SOCKET received
    socket.onAny((event, ...args) => {
      Logger.info(`SOCKET: ${JSON.stringify(event)} ${JSON.stringify(args)}`);
    });

    // logg all SOCKET sent by io
    const _emit = io.emit;
    io.emit = function (event: any, ...args: any[]) {
      Logger.info(`SOCKET: ${JSON.stringify(event)}`);
      _emit.apply(io, [event, ...args]);
    };

    Logger.info(`User connected with id ${socket.id}`);

    socket.on("disconnect", () => {
      Logger.info("user disconnected");
    });

    socket.on("GET_TRIPLEDICE", ({ currentUser, gameId }) => {
      Game.findById(gameId).then((game) => {
        try {
          if (game) {
            const diceResult = getTripleDiceScore(currentUser);
            game.events.push(diceResult);
            game.save();
            Logger.info("GET_TRIPLEDICE");
            io.emit("GAME", game);
          }
        } catch (error) {
          Logger.error(error);
        }
      });
    });

    socket.on("ATTACK_PLAYER", async ({ characterId, gameId, value }) => {
      try {
        let game = await Game.findById(gameId);

        if (!game) {
          return Logger.error("Game not found");
        }

        const playerIndex = game.players.findIndex(
          (p) => p.currentCharacter?.id.toString() === characterId.toString()
        );

        if (playerIndex === -1) {
          return Logger.error("Player not found");
        }

        let updatedPlayer = game.players;

        if (updatedPlayer[playerIndex].currentCharacter!.health <= 0) {
          return socket.emit("GAME", game);
        }

        updatedPlayer[playerIndex].currentCharacter!.health -= value;
        game.players.splice(0, game.players.length, ...updatedPlayer);
        await game.save();
        io.emit("GAME", game);
        console.log("game  emit", game);
      } catch (error) {
        Logger.error(error);
      }
    });

    socket.on("HEALTH_PLAYER", async ({ characterId, gameId, value }) => {
      try {
        let game = await Game.findById(gameId);

        if (!game) {
          return Logger.error("Game not found");
        }

        const playerIndex = game.players.findIndex((p) => {
          return p.currentCharacter && p.currentCharacter.id === characterId;
        });

        if (playerIndex === -1) {
          return Logger.error("Player not found");
        }

        let updatedPlayer = game.players;
        let health = updatedPlayer[playerIndex].currentCharacter!.health;
        let maxHealth = updatedPlayer[playerIndex].currentCharacter!.maxHealth;

        if (health >= maxHealth) {
          return socket.emit("GAME", game);
        }

        updatedPlayer[playerIndex].currentCharacter!.health += value;
        game.players.splice(0, game.players.length, ...updatedPlayer);
        await game.save();
        io.emit("GAME", game);
      } catch (error) {
        Logger.error(error);
      }
    });

    socket.on("GET_GAME", async (gameId: string) => {
      Logger.info("GET_GAME");
      try {
        const game = await Game.findById(gameId);
        socket.emit("GAME", game);
      } catch (error) {
        Logger.error(error);
      }
    });

    socket.on(
      "ADD_ENEMY_CHARACTER_IN_EVENT",
      async ({ enemyCharacter, gameId }) => {
        try {
          let game = await Game.findById(gameId);
          if (game) {
            enemyCharacter.id = (Math.random() * 100000000000000).toFixed(0);
            enemyCharacter.health = enemyCharacter.maxHealth;
            game.enemyCharacters.push(enemyCharacter);
            game.save();
            io.emit("GAME", game);
          }
        } catch (error) {
          Logger.error(error);
        }
      }
    );

    socket.on(
      "REMOVE_ENEMY_CHARACTER",
      async ({ enemyCharacterId, gameId }) => {
        try {
          let game = await Game.findById(gameId);
          if (game) {
            game.enemyCharacters = game.enemyCharacters.filter(
              (e) => e.id !== enemyCharacterId
            );
            game.save();
            io.emit("GAME", game);
          }
        } catch (error) {
          Logger.error(error);
        }
      }
    );

    socket.on(
      "EDIT_ENEMY_CHARACTER",
      async ({
        enemyCharacter,
        gameId,
        type,
      }: {
        enemyCharacter: EnemyCharacter;
        gameId: String;
        type: String;
      }) => {
        try {
          let game = await Game.findById(gameId);
          if (game) {
            const enemyCharacterIndex = game.enemyCharacters.findIndex(
              (e) => e.id === enemyCharacter.id
            );
            if (enemyCharacterIndex !== -1) {
              let updatedEnemyCharacters = game.enemyCharacters;
              updatedEnemyCharacters[enemyCharacterIndex] = enemyCharacter;
              game.enemyCharacters.splice(
                0,
                game.enemyCharacters.length,
                ...updatedEnemyCharacters
              );

              if (type === "CHANGE_HEALTH") {
                game.events.push({
                  type: "CHANGE_HEALTH",
                  timeStamp: Date.now(),
                  message: `${enemyCharacter.firstName} ${enemyCharacter.lastName} : ${enemyCharacter.health} points de vies restants`,
                } as updatedEnemyCharacterEvent);
              }
              await game.save();
              io.emit("GAME", game);
            }
          }
        } catch (error) {
          Logger.error(error);
        }
    });
  });
};

export default setupSocketIO;
