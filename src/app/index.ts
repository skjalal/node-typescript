import express, { Express, NextFunction, Request, Response } from "express";
import bodyParser from "body-parser";
import base from "./router/base-router";
import { errorHandler } from "./model/ErrorHandler";

const app: Express = express();

app.use(bodyParser.json());

app.use((req: Request, res: Response, next: NextFunction) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use(base);

app.use(errorHandler);

app.listen({ port: 3000 });
