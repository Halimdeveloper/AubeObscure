const testRouter = require("express").Router();

testRouter.get("/", (_req, res) => {
  res.send("Hello Typescript world!");
});

module.exports = testRouter;
