import { Request, Response } from "express";
import EnemyCharacter from "../models/EnemyCharacter";

export const getEnemyCharacters = async (req: Request, res: Response) => {
  const query = req.query;
  if (query.type) {
    const enemyCharacters = await EnemyCharacter.find({ type: query.type });
    res.send(enemyCharacters);
  } else {
    const enemyCharacters = await EnemyCharacter.find();
    res.send(enemyCharacters);
  }
};

export const postEnemyCharacters = async (req: Request, res: Response) => {
  const enemyCharacter = new EnemyCharacter({
    id: req.body.id,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    maxHealth: req.body.maxHealth,
    type: req.body.type,
    difficulty: req.body.difficulty,
    url: req.body.url,
  });
  try {
    await enemyCharacter.save();
    const enemyCharacters = await EnemyCharacter.find();
    res.status(201).send(enemyCharacters);
  } catch (error) {
    res.status(400).json({ error });
  }
};



