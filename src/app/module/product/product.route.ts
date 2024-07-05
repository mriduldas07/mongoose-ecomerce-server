import express from "express";
import { ProductController } from "./product.controller";

const router = express.Router();

//create product
router.post("/", ProductController.createProduct);
// get single product
router.get("/:productId", ProductController.getSingleProduct);
// product data update
router.put("/:productId", ProductController.updateProduct);
// product data delete
router.delete("/:productId", ProductController.deleteProduct);
// get all products
router.get("/", ProductController.getAllProducts);

export const ProductRoutes = router;
