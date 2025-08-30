import express from "express";
import { createUser, getAllUsers, getUserById, updateUser, deleteUser} from "../controller/userController";

const router = express.Router();

router.get("/", getAllUsers);
router.post("/", createUser);
router.get("/:id", getUserById);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
