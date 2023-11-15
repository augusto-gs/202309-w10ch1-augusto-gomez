import thingsLearned from "../data/thingsLearned.js";
import type { ThingsLearned } from "../data/types";

export class ThingsLearnedRepository {
  public getThingsObjects(): ThingsLearned[] {
    return thingsLearned;
  }

  public getThingObject(id: number): ThingsLearned {
    const thingsElement = thingsLearned.find((thing) => thing.id === id);

    if (!thingsElement) {
      throw new Error("Error: Id not found");
    }

    return thingsElement;
  }
}
