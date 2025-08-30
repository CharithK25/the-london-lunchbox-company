"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = __importDefault(require("./db"));
const userTable_1 = __importDefault(require("./data/userTable"));
const errorHandle_1 = __importDefault(require("./middleware/errorHandle"));
const user_1 = __importDefault(require("./routes/user"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = Number(process.env.PORT) || 5000;
/* ---------- Global middleware ---------- */
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use((0, morgan_1.default)("dev"));
/* ---------- Health check ---------- */
const healthHandler = async (_req, res) => {
    try {
        await db_1.default.query("SELECT 1");
        res.status(200).json({ ok: true });
    }
    catch {
        res.status(500).json({ ok: false });
    }
};
app.get("/health", healthHandler);
app.use("/api/user", user_1.default);
// -------Centralised error handling Error Handling---------
app.use(errorHandle_1.default);
//Create tables
(0, userTable_1.default)();
/* ---------- Orders (example POST) ---------- */
const createOrderHandler = async (req, res, next) => {
    try {
        const { items, customer_email } = req.body;
        if (!Array.isArray(items) || items.length === 0) {
            res.status(400).json({ error: "items[] required" });
            return;
        }
        // Example placeholder response (swap for INSERT when ready)
        res.status(201).json({ orderId: 123, items, customer_email: customer_email ?? null });
    }
    catch (err) {
        next(err);
    }
};
app.post("/orders", createOrderHandler);
/* ---------- DB name tester ---------- */
app.get("/", async (_req, res, next) => {
    try {
        const r = await db_1.default.query("SELECT current_database()");
        res.send(`The DB name is : ${r.rows[0].current_database}`);
    }
    catch (e) {
        next(e);
    }
});
/* ---------- Start server ---------- */
const server = app.listen(PORT, async () => {
    try {
        await db_1.default.query("SELECT 1");
        console.log(`🚀 API ready on http://localhost:${PORT}`);
    }
    catch {
        console.warn("⚠️  API started but DB not reachable yet.");
    }
});
