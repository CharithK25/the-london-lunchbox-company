// src/db.ts
import pkg from "pg";
import dotenv from "dotenv";

const { Pool } = pkg;
dotenv.config();

console.log("DB config:", {
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  user: process.env.POSTGRES_USER,
  database: process.env.POSTGRES_DB,
});

const pool = new Pool({
  host: process.env.POSTGRES_HOST || "localhost",
  port: Number(process.env.POSTGRES_PORT || 5432),
  user: process.env.POSTGRES_USER || "admin",
  password: process.env.POSTGRES_PASSWORD || "secret",
  database: process.env.POSTGRES_DB || "lunchboxdb",
  ssl: false,
  max: 10, // pool size
  idleTimeoutMillis: 30000,
});

export default pool;