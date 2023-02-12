import express from "express";
import setupRoutes from "../routes";

const app = express();

setupRoutes(app);

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
