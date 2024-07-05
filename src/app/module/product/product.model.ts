import { model, Schema } from "mongoose";
import { IProduct, IProductModel } from "./product.interface";

// making schema and model for product
const productSchema = new Schema<IProduct, IProductModel>(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    tags: {
      type: [String],
      required: true,
    },
    variants: [
      {
        type: {
          type: String,
          required: true,
        },
        value: {
          type: String,
          required: true,
        },
      },
    ],
    inventory: {
      quantity: {
        type: Number,
      },
      inStock: {
        type: Boolean,
        required: true,
      },
    },
  },
  {
    timestamps: true,
  }
);

export const Product = model<IProduct, IProductModel>("Product", productSchema);
