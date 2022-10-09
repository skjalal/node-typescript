import express, { Express, NextFunction, Request, Response } from "express";
import bodyParser from "body-parser";
import { BaseRouter, UserRouter } from "./router";
import { errorHandler } from "./model/ErrorHandler";
import { dbMigrate } from "./config/db-migration";

const app: Express = express();

app.use(bodyParser.json());

app.use((req: Request, res: Response, next: NextFunction) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use(BaseRouter);

app.use(errorHandler);
dbMigrate();

app.use("/api/v1", UserRouter);

app.listen({ port: 3000 });
