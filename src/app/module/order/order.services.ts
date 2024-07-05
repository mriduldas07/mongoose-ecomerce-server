import ApiError from "../../errors/ApiError";
import { Product } from "../product/product.model";
import { IOrder } from "./order.interface";
import { Order } from "./order.model";

const createOrder = async (payload: IOrder): Promise<IOrder> => {
  const { quantity, productId, ...others } = payload;
  const product = await Product.findById(productId).lean();
  console.log(product);

  if (product && product.inventory.quantity < quantity) {
    throw new ApiError(400, "Insufficient quantity available in inventory");
  }
  if (product && product.inventory.quantity >= quantity) {
    const newQuantity = Number(product.inventory.quantity - quantity);

    if (newQuantity === 0) {
      const updatedData = {
        ...product,
        inventory: {
          quantity: newQuantity,
          inStock: false,
        },
      };
      await Product.findOneAndUpdate({ _id: productId }, updatedData, {
        new: true,
      });
    } else {
      const updatedData = {
        ...product,
        inventory: {
          quantity: newQuantity,
          inStock: product.inventory.inStock,
        },
      };
      await Product.findOneAndUpdate({ _id: productId }, updatedData, {
        new: true,
      });
    }
  }

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
