"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRoutes = void 0;
const express_1 = __importDefault(require("express"));
const order_controller_1 = require("./order.controller");
const router = express_1.default.Router();
//create order
router.post("/", order_controller_1.OrderController.createOrder);
// get single product
router.get("/:productId");
// product data update
router.put("/:productId");
// product data delete
router.delete("/:productId");
// get all orders by user email
router.get("/", order_controller_1.OrderController.getOrdersByUserEmail);
// get all orders
router.get("/", order_controller_1.OrderController.getAllOrders);
exports.OrderRoutes = router;
