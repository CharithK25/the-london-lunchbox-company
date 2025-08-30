"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../db"));
const userTable = async () => {
    const queryText = `CREATE TABLE IF NOT EXISTS userss(
    id SERIAL PRIMARY KEY,
  firstname VARCHAR(100) NOT NULL,
  lastname VARCHAR(100) NOT NULL,
  mobilenumber VARCHAR(15) UNIQUE NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
    
    )`;
    try {
        db_1.default.query(queryText);
        console.log("User table is created");
    }
    catch (error) {
        console.log("Error creating users");
    }
};
exports.default = userTable;
