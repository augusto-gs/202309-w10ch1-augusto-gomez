import type { Request, Response } from "express";
import { ThingsLearnedRepository } from "../repository/ThingsLearnedRepository.js";

const thingsLearnedRepositoryInstance = new ThingsLearnedRepository();

type ByThingIdRequest = Request<{ idThing: string }>;

class ThingsLearnedController {
  public getThings(_req: Request, res: Response) {
    res
      .status(200)
      .json({ things: thingsLearnedRepositoryInstance.getThingsObjects() });
  }

  public getThing(req: ByThingIdRequest, res: Response) {
    const { idThing } = req.params;
    try {
      res
        .status(200)
        .json(thingsLearnedRepositoryInstance.getThingObject(+idThing));
    } catch {
      res.status(404);
    }
  }
}

export default ThingsLearnedController;
