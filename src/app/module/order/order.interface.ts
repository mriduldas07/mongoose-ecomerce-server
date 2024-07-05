// type define for orders

import { Model, Types } from "mongoose";
import { IProduct } from "../product/product.interface";

export type IOrder = {
  email: string;
  productId: Types.ObjectId | IProduct;
  price: number;
  quantity: number;
};

// define a type for order model
export type IOrderModel = Model<IOrder, object>;
