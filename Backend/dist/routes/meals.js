"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = require("../db");
const router = express_1.default.Router();
router.get('/', (req, res) => {
    db_1.db.query('SELECT * FROM meals', (err, results) => {
        if (err)
            return res.status(500).send(err.message);
        res.json(results);
    });
});
exports.default = router;
