import { Request, Response } from "express";
import httpStatus from "http-status";
import { OrderServices } from "./order.services";

const createOrder = async (req: Request, res: Response) => {
  const { ...orderData } = req.body;
  const result = await OrderServices.createOrder(orderData);

  res.status(httpStatus.CREATED).json({
    success: true,
    message: "Order created successfully!",
    data: result,
  });
};
const getAllOrders = async (req: Request, res: Response) => {
  const result = await OrderServices.getAllOrders();

  res.status(httpStatus.OK).json({
    success: true,
    message: "Orders fetched successfully!",
    data: result,
  });
};
const getOrdersByUserEmail = async (req: Request, res: Response) => {
  const email = req.query.email as string;
  const result = await OrderServices.getOrderByUserEmail(email);

  res.status(httpStatus.OK).json({
    success: true,
    message: "Orders fetched successfully!",
    data: result,
  });
};

export const OrderController = {
  createOrder,
  getAllOrders,
  getOrdersByUserEmail,
};
