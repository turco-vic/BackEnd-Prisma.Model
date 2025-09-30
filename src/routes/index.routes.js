import express from "express";

// Importar todas as rotas
import userRouter from "./users.routes.js";

const router = express.Router();

// Rotas públicas
router.use("/users", userRouter)

export default router;