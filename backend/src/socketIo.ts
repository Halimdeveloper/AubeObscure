import { Socket } from "socket.io";
import { getTripleDiceScore } from "./function/getDice";
import Logger from "./lib/winston";
import Game, { IGame } from "./models/Game";

const setupSocketIO = (io: any) => {
  io.on("connection", (socket: Socket) => {
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
            game.enemyCharacters.push({
              ...enemyCharacter,
              health: enemyCharacter.maxHealth,
            });
            game.save();
            io.emit("GAME", game);
          }
        } catch (error) {
          Logger.error(error);
        }
      }
    );
  });
};

export default setupSocketIO;
