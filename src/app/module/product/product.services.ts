import { IProduct } from "./product.interface";
import { Product } from "./product.model";

const createProduct = async (payload: IProduct): Promise<IProduct> => {
  const result = await Product.create(payload);
  return result;
};
const getAllProducts = async (): Promise<IProduct[]> => {
  const result = await Product.find();
  return result;
};
const getSingleProduct = async (id: string): Promise<IProduct | null> => {
  const result = await Product.findById(id);
  return result;
};
const updateProduct = async (
  payload: IProduct,
  id: string
): Promise<IProduct | null> => {
  const result = await Product.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

const deleteProduct = async (id: string): Promise<IProduct | null> => {
  const result = await Product.findByIdAndDelete(id);
  return result;
};

export const ProductServices = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
