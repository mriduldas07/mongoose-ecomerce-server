"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderServices = void 0;
const ApiError_1 = __importDefault(require("../../errors/ApiError"));
const product_model_1 = require("../product/product.model");
const order_model_1 = require("./order.model");
const createOrder = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { quantity, productId } = payload, others = __rest(payload, ["quantity", "productId"]);
    const product = yield product_model_1.Product.findById(productId).lean();
    console.log(product);
    if (product && product.inventory.quantity < quantity) {
        throw new ApiError_1.default(400, "Insufficient quantity available in inventory");
    }
    if (product && product.inventory.quantity >= quantity) {
        const newQuantity = Number(product.inventory.quantity - quantity);
        if (newQuantity === 0) {
            const updatedData = Object.assign(Object.assign({}, product), { inventory: {
                    quantity: newQuantity,
                    inStock: false,
                } });
            yield product_model_1.Product.findOneAndUpdate({ _id: productId }, updatedData, {
                new: true,
            });
        }
        else {
            const updatedData = Object.assign(Object.assign({}, product), { inventory: {
                    quantity: newQuantity,
                    inStock: product.inventory.inStock,
                } });
            yield product_model_1.Product.findOneAndUpdate({ _id: productId }, updatedData, {
                new: true,
            });
        }
    }
    const result = (yield order_model_1.Order.create(payload)).populate("productId");
    return result;
});
const getAllOrders = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_model_1.Order.find().populate("productId");
    return result;
});
const getOrderByUserEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_model_1.Order.find({ email }).populate("productId");
    return result;
});
exports.OrderServices = {
    createOrder,
    getAllOrders,
    getOrderByUserEmail,
};
