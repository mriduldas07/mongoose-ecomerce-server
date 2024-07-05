import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import { OrderServices } from "./order.services";

const createOrder = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { ...orderData } = req.body;
    const result = await OrderServices.createOrder(orderData);

    res.status(httpStatus.CREATED).json({
      success: true,
      message: "Order created successfully!",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const getAllOrders = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await OrderServices.getAllOrders();

    res.status(httpStatus.OK).json({
      success: true,
      message: "Orders fetched successfully!",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const getOrdersByUserEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const email = req.query.email as string;
    const result = await OrderServices.getOrderByUserEmail(email);

    res.status(httpStatus.OK).json({
      success: true,
      message: "Orders fetched successfully!",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const OrderController = {
  createOrder,
  getAllOrders,
  getOrdersByUserEmail,
};
