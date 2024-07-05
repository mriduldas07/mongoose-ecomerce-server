import { productSearchableFields } from "./product.constant";
import { IProduct, IProductFilters } from "./product.interface";
import { Product } from "./product.model";

const createProduct = async (payload: IProduct): Promise<IProduct> => {
  const result = await Product.create(payload);
  return result;
};
const getAllProducts = async (
  filters: IProductFilters
): Promise<IProduct[]> => {
  const { searchTerm } = filters;

  const andConditions = [];
  if (searchTerm) {
    andConditions.push({
      $or: productSearchableFields.map((field) => ({
        [field]: {
          $regex: searchTerm,
          $options: "i",
        },
      })),
    });
  }

  const whereConditions =
    andConditions.length > 0 ? { $and: andConditions } : {};

  const result = await Product.find(whereConditions);
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
