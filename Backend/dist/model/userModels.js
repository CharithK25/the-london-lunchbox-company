"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserService = exports.createUserService = exports.updateUserService = exports.getUserByIdService = exports.getAllUsersService = void 0;
const db_1 = __importDefault(require("../db"));
const getAllUsersService = async () => {
    const result = await db_1.default.query("SELECT * FROM userss");
    return result.rows;
};
exports.getAllUsersService = getAllUsersService;
const getUserByIdService = async (id) => {
    const result = await db_1.default.query("SELECT * FROM userss WHERE id = $1", [id]);
    return result.rows[0];
};
exports.getUserByIdService = getUserByIdService;
const updateUserService = async (firstname, lastname, mobilenumber, email, id) => {
    const result = await db_1.default.query("UPDATE userss SET firstname = $1, lastname = $2, mobilenumber = $3, email = $4 WHERE id = $5 RETURNING *", [firstname, lastname, mobilenumber, email, id]);
    return result.rows[0];
};
exports.updateUserService = updateUserService;
const createUserService = async (firstname, lastname, mobilenumber, email, password // kept, even if not used
) => {
    console.log('INSERTing with columns: firstname, lastname, mobilenumber, email');
    const result = await db_1.default.query("INSERT INTO userss (firstname, lastname, mobilenumber, email) VALUES ($1, $2,$3,$4) RETURNING *", [firstname, lastname, mobilenumber, email]);
    return result.rows[0];
};
exports.createUserService = createUserService;
const deleteUserService = async (id) => {
    // $1 placeholder
    const result = await db_1.default.query("DELETE FROM userss WHERE id = $1 RETURNING *", [id]);
    return result.rows[0];
};
exports.deleteUserService = deleteUserService;
