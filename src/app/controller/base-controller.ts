import { NextFunction, Request, Response } from "express";

export const baseController = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(200).json({ message: "Hello from Node Application!!!" });
  return;
};
