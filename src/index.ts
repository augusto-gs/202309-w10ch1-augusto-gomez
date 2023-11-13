import "dotenv/config";
import express from "express";
import morgan from "morgan";
import { thingsLearnedRouter } from "./features/thingsLearned/routers/thingsLearnedRouter.js";
import thingsLearned from "./features/thingsLearned/data/thingsLearned.js";

const app = express();

app.listen(process.env.PORT);

app.use(morgan("dev"));

app.use("/things", thingsLearnedRouter);

app.get("/hola", (_req, res) => {
  res.status(200).json({ things: thingsLearned });
});

// App.get("/things", (_req, res) => {
// res.status(200).json({ things: thingsLearned });
// });
