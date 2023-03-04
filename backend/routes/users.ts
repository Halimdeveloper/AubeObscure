const users = require("express").Router();
import clientPromise from "../db/db";
import { ObjectId } from "mongodb";

users.get("/", async (req, res) => {
  const client = await clientPromise;
  const db = client.db("AubeObscureDB");
  const collection = db.collection("users");
  const users = await collection.find({}).toArray();
  res.send(users);
});

users.post("/", async (req, res) => {
  const client = await clientPromise;
  const db = client.db("AubeObscureDB");
  const collection = db.collection("users");
  const user = req.body;
  const result = await collection.insertOne(user);
  res.send(result);
});

//update user by id
users.put("/:id", async (req, res) => {
  const client = await clientPromise;
  const db = client.db("AubeObscureDB");
  const collection = db.collection("users");
  const id = req.params.id;
  const user = req.body;

  const result = await collection.updateOne(
    {
      _id: new ObjectId(id),
    },
    {
      $set: {
        test: user.test,
      },
    }
  );
  res.send(result);
});

//delete user by id
users.delete("/:id", async (req, res) => {
  const client = await clientPromise;
  const db = client.db("AubeObscureDB");
  const collection = db.collection("users");
  const id = req.params.id;
  const result = await collection.deleteOne({
    _id: new ObjectId(id),
  });
  res.send(result);
});

module.exports = users;
