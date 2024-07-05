import express from "express";
import { OrderRoutes } from "../module/order/order.route";
import { ProductRoutes } from "../module/product/product.route";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/products",
    route: ProductRoutes,
  },
  {
    path: "/orders",
    route: OrderRoutes,
  },
];

moduleRoutes.forEach(({ path, route }) => router.use(path, route));

export default router;
