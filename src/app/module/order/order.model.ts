import { model, Schema } from "mongoose";
import { IOrder, IOrderModel } from "./order.interface";

const orderSchema = new Schema<IOrder, IOrderModel>(
  {
    email: {
      type: String,
      required: true,
    },
    productId: {
      type: Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Order = model<IOrder, IOrderModel>("Order", orderSchema);
