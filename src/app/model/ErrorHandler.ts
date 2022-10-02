import { ErrorRequestHandler } from "express";

export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  console.log(req.path);
  console.log(next.name);
  console.log(err);
  const status: number = err.statusCode || 500;
  const message: string = err.message || "Internal server error";
  const data: JSON = err.data || {};
  res.status(status).json({ message: message, data: data });
};
