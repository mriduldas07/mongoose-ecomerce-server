import { IOrder } from "./order.interface";
import { Order } from "./order.model";

const createOrder = async (payload: IOrder): Promise<IOrder> => {
  const result = (await Order.create(payload)).populate("productId");
  return result;
};
const getAllOrders = async (): Promise<IOrder[]> => {
  const result = await Order.find().populate("productId");
  return result;
};
const getOrderByUserEmail = async (email: string): Promise<IOrder[]> => {
  const result = await Order.find({ email }).populate("productId");
  return result;
};

export const OrderServices = {
  createOrder,
  getAllOrders,
  getOrderByUserEmail,
};
