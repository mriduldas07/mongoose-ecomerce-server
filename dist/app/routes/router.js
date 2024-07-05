"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const order_route_1 = require("../module/order/order.route");
const product_route_1 = require("../module/product/product.route");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: "/products",
        route: product_route_1.ProductRoutes,
    },
    {
        path: "/orders",
        route: order_route_1.OrderRoutes,
    },
];
moduleRoutes.forEach(({ path, route }) => router.use(path, route));
exports.default = router;
