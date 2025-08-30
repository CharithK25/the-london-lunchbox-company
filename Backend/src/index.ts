import express, { Request, Response, NextFunction, RequestHandler } from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import pool from "./db";
import userRoutes from "./routes/user";
import userTable from "./data/userTable";
import errorHandling from "./middleware/errorHandle";
import router from "./routes/user";

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT) || 5000;

/* ---------- Global middleware ---------- */
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

/* ---------- Health check ---------- */
const healthHandler: RequestHandler = async (_req, res) => {
  try {
    await pool.query("SELECT 1");
    res.status(200).json({ ok: true });
  } catch {
    res.status(500).json({ ok: false });
  }
};
app.get("/health", healthHandler);

app.use("/api/user", router);

// -------Centralised error handling Error Handling---------

app.use(errorHandling);

//Create tables
userTable();

/* ---------- Orders (example POST) ---------- */
const createOrderHandler: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { items, customer_email } = req.body;

    if (!Array.isArray(items) || items.length === 0) {
      res.status(400).json({ error: "items[] required" });
      return;
    }

    // Example placeholder response (swap for INSERT when ready)
    res.status(201).json({ orderId: 123, items, customer_email: customer_email ?? null });
  } catch (err) {
    next(err);
  }
};
app.post("/orders", createOrderHandler);

/* ---------- DB name tester ---------- */
app.get("/", async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const r = await pool.query<{ current_database: string }>("SELECT current_database()");
    res.send(`The DB name is : ${r.rows[0].current_database}`);
  } catch (e) {
    next(e);
  }
});

/* ---------- Start server ---------- */
const server = app.listen(PORT, async () => {
  try {
    await pool.query("SELECT 1");
    console.log(`🚀 API ready on http://localhost:${PORT}`);
  } catch {
    console.warn("⚠️  API started but DB not reachable yet.");
  }
});

