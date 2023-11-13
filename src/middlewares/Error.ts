import { type Request, type Response } from "express";

const urlNotFound = (_req: Request, res: Response) => {
  res.status(200).json({ error: "Not found" });
};

export default urlNotFound;
