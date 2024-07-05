import { Request, Response } from "express";
import httpStatus from "http-status";
import { ProductServices } from "./product.services";

const createProduct = async (req: Request, res: Response) => {
  const { ...productData } = req.body;

  const result = await ProductServices.createProduct(productData);

  res.status(httpStatus.CREATED).json({
    success: true,
    message: "Product created successfully!",
    data: result,
  });
};
const getAllProducts = async (req: Request, res: Response) => {
  const result = await ProductServices.getAllProducts();

  res.status(httpStatus.OK).json({
    success: true,
    message: "Products fetched successfully!",
    data: result,
  });
};
const getSingleProduct = async (req: Request, res: Response) => {
  const productId = req.params.productId;
  const result = await ProductServices.getSingleProduct(productId);

  res.status(httpStatus.OK).json({
    success: true,
    message: "Products fetched successfully!",
    data: result,
  });
};
const updateProduct = async (req: Request, res: Response) => {
  const productId = req.params.productId;
  const { inventory, ...others } = req.body;
  const updatedData = { ...others };

  if (inventory && Object.keys(inventory).length > 0) {
    Object.keys(inventory).forEach((key) => {
      const inventoryKey = `inventory.${key}`;
      updatedData[inventoryKey] = inventory[key];
    });
  }
  const result = await ProductServices.updateProduct(updatedData, productId);

  res.status(httpStatus.OK).json({
    success: true,
    message: "Products updated successfully!",
    data: result,
  });
};

export const ProductController = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
};
