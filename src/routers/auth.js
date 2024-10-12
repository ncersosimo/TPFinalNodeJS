import { Router } from "express";
import { authController } from "../controllers/auth.js";
import { verifyAccessToken } from "../middlewares/verifyAccessToken.js";
export const router = Router()
router.get('/users', verifyAccessToken, authController.getAll)
router.get("/:id",authController.getById);
router.post('/register', authController.registerUser)
router.post('/login', authController.login) 
router.delete('/delete/:id', verifyAccessToken, authController.deleteUser) 