"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoutes = void 0;
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("./product.controller");
const router = express_1.default.Router();
//create product
router.post("/", product_controller_1.ProductController.createProduct);
// get single product
router.get("/:productId", product_controller_1.ProductController.getSingleProduct);
// product data update
router.put("/:productId", product_controller_1.ProductController.updateProduct);
// product data delete
router.delete("/:productId", product_controller_1.ProductController.deleteProduct);
// get all products
router.get("/", product_controller_1.ProductController.getAllProducts);
exports.ProductRoutes = router;
