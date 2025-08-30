import { Request, Response, NextFunction } from "express";
// import errorHandling from "../middleware/errorHandle";
import { createUserService, getAllUsersService, getUserByIdService, updateUserService, deleteUserService } from "../model/userModels";
// import router from "../routes/user";

// const router = require('../routes/user');

export default function handleResponse <T>(res : Response, status : number , message : string , data?: T): void  {
    res.status(status).json({
    status,
   message,
      data,
    });
};

export const createUser = async (req : Request, res: Response, next : NextFunction): Promise<void>=>{
    const {firstname,lastname, mobilenumber, email,password } = req.body;
try{
const newUser = await createUserService(firstname,lastname, mobilenumber, email, password);
handleResponse(res, 201,"User Created successfully", newUser);
}catch(err){
    next(err);

}};

export const getAllUsers = async (req : Request, res: Response, next : NextFunction): Promise<void>=>{
    const {firstname,lastname, mobilenumber, email,password } = req.body;
try{
const newGetUser = await getAllUsersService();
handleResponse(res, 200,"User Created successfully", newGetUser);
}
catch(err)
{
    next(err);

}};

type IdParams = { id: string };
export const getUserById = async (req : Request, res: Response, next : NextFunction) : Promise<void>=> {
  try {
    
    const id = Number(req.params.id);
    if (Number.isNaN(id)) {
      res.status(400).json({ error: "Invalid id" });
      return; // <- return void
    }

    const user = await getUserByIdService(id);
    if (!user) {
      res.status(404).json({ error: "Not found" });
      return; // <- return void
    }

    handleResponse(res, 202, "User retrieved", user);
  } catch (err) {
    next(err);
  }
};

export const updateUser = async (req : Request, res: Response, next : NextFunction) : Promise<void>=> {
    
    try {
      const id = Number(req.params.id);
      if (Number.isNaN(id)) {
        res.status(400).json({ error: "Invalid id" });
        return; // <- return void
      }
      const {firstname,lastname, mobilenumber, email} = req.body;
      const updatedUser = await updateUserService(firstname,lastname, mobilenumber, email, id);
      if (!updateUser) {
        res.status(404).json({ error: "Not found" });
        return; // <- return void
      }
      handleResponse(res, 203, "User retrieved", updateUser);
    } catch (err) {
      next(err);
    }
  };

  export const deleteUser = async (req : Request, res: Response, next : NextFunction): Promise<void>=>{

    try{
const id = Number(req.params.id);
if (Number.isNaN(id)){
    res.status(400).json({error: "Invalid id"});
    return;
}
const deletedUser= await deleteUserService(id);
if(!deleteUser){
    res.status(404).json({error:"not Found"});
    return;
}
handleResponse(res, 204, "User Deleted", deletedUser)
    }
    catch(err){
next(err);
    }
  }
