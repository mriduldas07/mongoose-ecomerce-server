import { z } from "zod";

const createProductZodSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: "Name is required",
    }),
    description: z.string({
      required_error: "Description is required",
    }),
    price: z.number({
      required_error: "Price is required",
    }),
    category: z.string({
      required_error: "Category is required",
    }),
    tags: z.array(z.string(), {
      required_error: "Tags is required",
    }),
    inventory: z.object(
      {
        quantity: z.string({}),
        inStock: z.string(),
      },
      { required_error: "Inventory is required" }
    ),
    variants: z.object(
      {
        type: z.string(),
        value: z.string(),
      },
      {
        required_error: "Varients is required",
      }
    ),
  }),
});

export const ProductValidation = {
  createProductZodSchema,
};
