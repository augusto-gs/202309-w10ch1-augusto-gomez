import "dotenv/config";
import express from "express";
import morgan from "morgan";
import { thingsLearnedRouter } from "./features/thingsLearned/routers/thingsLearnedRouter.js";

const app = express();

const port = process.env.PORT ?? 4000;

app.listen(+port, "Localhost", () => {
  console.log("Listening to port");
});

app.use(morgan("dev"));

app.use("/things", thingsLearnedRouter);
app.use(express.json());
