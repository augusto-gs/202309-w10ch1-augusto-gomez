import { Router } from "express";
import thingsLearned from "../data/thingsLearned.js";
import urlNotFound from "../../../middlewares/Error.js";

export const thingsLearnedRouter = Router();

thingsLearnedRouter.get("/", (_req, res) => {
  res.status(200).json({ things: thingsLearned });
});

thingsLearnedRouter.use(urlNotFound);
