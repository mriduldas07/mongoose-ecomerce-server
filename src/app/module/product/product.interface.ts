import { Model } from "mongoose";

// type define for product
export type IProduct = {
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  variants: {
    type: string;
    value: string;
  }[];
  inventory: {
    quantity: number;
    inStock: boolean;
  };
};

// product model type define
export type IProductModel = Model<IProduct, object>;
