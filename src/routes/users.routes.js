import express from "express";
import UserController from "../controllers/users.controller.js";

const userRouter = express.Router();

userRouter.get("/", UserController.findAll);
userRouter.post("/", UserController.create);

export default userRouter;
