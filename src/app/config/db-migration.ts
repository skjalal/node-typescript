import { config } from "dotenv";
import { migrate } from "postgres-migrations";

config();

export const dbMigrate = async () => {
  const dbConfig = {
    database: process.env.DB_NAME as string,
    user: process.env.DB_USER as string,
    password: process.env.DB_PASSWORD as string,
    host: process.env.DB_HOST as string,
    port: 5432,

    // Default: false for backwards-compatibility
    // This might change!
    ensureDatabaseExists: true,

    // Default: "postgres"
    // Used when checking/creating "database-name"
    defaultDatabase: "postgres",
  };

  await migrate(dbConfig, "./db");
};
