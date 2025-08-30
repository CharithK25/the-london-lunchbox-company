"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.getUserById = exports.getAllUsers = exports.createUser = void 0;
exports.default = handleResponse;
// import errorHandling from "../middleware/errorHandle";
const userModels_1 = require("../model/userModels");
// import router from "../routes/user";
// const router = require('../routes/user');
function handleResponse(res, status, message, data) {
    res.status(status).json({
        status,
        message,
        data,
    });
}
;
const createUser = async (req, res, next) => {
    const { firstname, lastname, mobilenumber, email, password } = req.body;
    try {
        const newUser = await (0, userModels_1.createUserService)(firstname, lastname, mobilenumber, email, password);
        handleResponse(res, 201, "User Created successfully", newUser);
    }
    catch (err) {
        next(err);
    }
};
exports.createUser = createUser;
const getAllUsers = async (req, res, next) => {
    const { firstname, lastname, mobilenumber, email, password } = req.body;
    try {
        const newGetUser = await (0, userModels_1.getAllUsersService)();
        handleResponse(res, 200, "User Created successfully", newGetUser);
    }
    catch (err) {
        next(err);
    }
};
exports.getAllUsers = getAllUsers;
const getUserById = async (req, res, next) => {
    try {
        const id = Number(req.params.id);
        if (Number.isNaN(id)) {
            res.status(400).json({ error: "Invalid id" });
            return; // <- return void
        }
        const user = await (0, userModels_1.getUserByIdService)(id);
        if (!user) {
            res.status(404).json({ error: "Not found" });
            return; // <- return void
        }
        handleResponse(res, 202, "User retrieved", user);
    }
    catch (err) {
        next(err);
    }
};
exports.getUserById = getUserById;
const updateUser = async (req, res, next) => {
    try {
        const id = Number(req.params.id);
        if (Number.isNaN(id)) {
            res.status(400).json({ error: "Invalid id" });
            return; // <- return void
        }
        const { firstname, lastname, mobilenumber, email } = req.body;
        const updatedUser = await (0, userModels_1.updateUserService)(firstname, lastname, mobilenumber, email, id);
        if (!exports.updateUser) {
            res.status(404).json({ error: "Not found" });
            return; // <- return void
        }
        handleResponse(res, 203, "User retrieved", exports.updateUser);
    }
    catch (err) {
        next(err);
    }
};
exports.updateUser = updateUser;
const deleteUser = async (req, res, next) => {
    try {
        const id = Number(req.params.id);
        if (Number.isNaN(id)) {
            res.status(400).json({ error: "Invalid id" });
            return;
        }
        const deletedUser = await (0, userModels_1.deleteUserService)(id);
        if (!exports.deleteUser) {
            res.status(404).json({ error: "not Found" });
            return;
        }
        handleResponse(res, 204, "User Deleted", deletedUser);
    }
    catch (err) {
        next(err);
    }
};
exports.deleteUser = deleteUser;
