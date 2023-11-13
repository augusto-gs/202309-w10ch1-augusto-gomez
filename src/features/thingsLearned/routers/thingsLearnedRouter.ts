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

  if (!thingsElement) {
    res.status(400).json({ error: "Incorrect id" });
    return;
  }

  res.status(200).json({ thingsElement });
});

thingsLearnedRouter.delete("/:idThing", (req, res) => {
  const { idThing } = req.params;
  const thingsIndex = thingsLearned.findIndex((thing) => thing.id === +idThing);
  thingsLearned.splice(thingsIndex, 1);

  if (thingsIndex === -1) {
    res.status(400).json({ error: "Thing not found" });
  }

  res.status(200).json({});
});

thingsLearnedRouter.use(urlNotFound);
