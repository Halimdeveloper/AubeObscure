import { Router } from "express";
import User from "./../models/User";

const users = Router();

users.get("/", async (req, res) => {
  //mangoose get all users
  const users = await User.find();
  res.send(users);
});

users.post("/", async (req, res) => {
  const user = new User({
    ...req.body,
  });
  user
    .save()
    .then(() => res.status(201).json({ message: "Objet enregistré !" }))
    .catch((error) => res.status(400).json({ error }));
});

//update user by id
users.put("/:id", async (req, res) => {
  //mangoose update user by id
  const user = await User.findOne({ _id: req.params.id });
  user && user
    .updateOne(
      //with $set
      { $set: { ...req.body } }
    )
    .then(() => res.status(200).json({ message: "Objet modifié !" }))
    .catch((error) => res.status(400).json({ error }));
});

//delete user by id
users.delete("/:id", async (req, res) => {
  const user = await User.findOne({ _id: req.params.id });
  user && user
    .deleteOne()
    .then(() => res.status(200).json({ message: "Objet supprimé !" }))
    .catch((error) => res.status(400).json({ error }));
});

export default users
