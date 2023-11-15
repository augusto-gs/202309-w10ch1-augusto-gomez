import { Router } from "express";
import thingsLearned from "../data/thingsLearned.js";
import urlNotFound from "../../../middlewares/Error.js";
import ThingsLearnedController from "../controllers/ThingsLearnedController.js";

export const thingsLearnedRouter = Router();

const thingsLearnedController = new ThingsLearnedController();

thingsLearnedRouter.get("/", thingsLearnedController.getThings);

thingsLearnedRouter.get("/:idThing", thingsLearnedController.getThing);

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
