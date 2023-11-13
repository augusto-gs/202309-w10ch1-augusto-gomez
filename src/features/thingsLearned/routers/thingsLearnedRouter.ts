import { Router } from "express";
import thingsLearned from "../data/thingsLearned.js";
import urlNotFound from "../../../middlewares/Error.js";

export const thingsLearnedRouter = Router();

thingsLearnedRouter.get("/", (_req, res) => {
  res.status(200).json({ thingsLearned });
});

thingsLearnedRouter.get("/:idThing", (req, res) => {
  const { idThing } = req.params;
  const thingsElement = thingsLearned.find((thing) => thing.id === +idThing);
  res.status(200).json({ thingsElement });
});

thingsLearnedRouter.use(urlNotFound);
