import { Router } from "express";
import { productController } from "../controllers/products.js";
import { verifyAccessToken } from "../middlewares/verifyAccessToken.js";
export const router = Router();

router.get("/", productController.getAll);
router.get("/s", productController.getByMark);
router.get("/:id",productController.getById);
router.post("/create", verifyAccessToken, productController.createOne);
router.patch("/update/:id", verifyAccessToken, productController.updateOne);
router.delete("/delete/:id", verifyAccessToken, productController.deleteOne);