"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductValidation = void 0;
const zod_1 = require("zod");
const createProductZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({
            required_error: "Name is required",
        }),
        description: zod_1.z.string({
            required_error: "Description is required",
        }),
        price: zod_1.z.number({
            required_error: "Price is required",
        }),
        category: zod_1.z.string({
            required_error: "Category is required",
        }),
        tags: zod_1.z.array(zod_1.z.string(), {
            required_error: "Tags is required",
        }),
        inventory: zod_1.z.object({
            quantity: zod_1.z.string({}),
            inStock: zod_1.z.string(),
        }, { required_error: "Inventory is required" }),
        variants: zod_1.z.object({
            type: zod_1.z.string(),
            value: zod_1.z.string(),
        }, {
            required_error: "Varients is required",
        }),
    }),
});
exports.ProductValidation = {
    createProductZodSchema,
};
