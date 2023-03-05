// Controler user
import User from "../models/User";
import { Request, Response } from "express";

export const createUser = async (req: Request, res: Response) => {
  const user = new User({
    ...req.body,
  });
  user
    .save()
    .then(() => res.status(201).json({ message: "Objet enregistré !" }))
    .catch((error) => res.status(400).json({ error }));
};

export const getUsers = async (req: Request, res: Response) => {
  const query = req.query;

  if (query.inGame) {
    const users = await User.find({ inGame: query.inGame });
    res.send(users);
  } else {
    const users = await User.find();
    res.send(users);
  }
};

export const getUserById = async (req: Request, res: Response) => {
  //mangoose update user by id
  const user = await User.findOne({ _id: req.params.id });
  user &&
    user
      .updateOne(
        //with $set
        { $set: { ...req.body } }
      )
      .then(() => res.status(200).json({ message: "Objet modifié !" }))
      .catch((error) => res.status(400).json({ error }));
};

export const deleteUserById = async (req: Request, res: Response) => {
  const user = await User.findOne({ _id: req.params.id });
  user &&
    user
      .deleteOne()
      .then(() => res.status(200).json({ message: "Objet supprimé !" }))
      .catch((error) => res.status(400).json({ error }));
};
