import express from "express";
import { OrderController } from "./order.controller";

const router = express.Router();

//create order
router.post("/", OrderController.createOrder);
// get single product
router.get("/:productId");
// product data update
router.put("/:productId");
// product data delete
router.delete("/:productId");
// get all orders by user email
router.get("/", OrderController.getOrdersByUserEmail);
// get all orders
router.get("/", OrderController.getAllOrders);

export const OrderRoutes = router;
