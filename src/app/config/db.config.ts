import { config } from "dotenv";
import { Dialect, Sequelize } from "sequelize";

config();

const dbName = process.env.DB_NAME as string;
const dbUser = process.env.DB_USER as string;
const dbHost = process.env.DB_HOST;
const dbDriver = process.env.DB_DRIVER as Dialect;
const dbPassword = process.env.DB_PASSWORD;
const pool = {
  max: 5,
  min: 0,
  acquire: 30000,
  idle: 10000,
};

export const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  dialect: dbDriver,
  pool: pool,
});
