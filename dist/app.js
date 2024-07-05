"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const http_status_1 = __importDefault(require("http-status"));
const globalErrorHandler_1 = __importDefault(require("./app/middleware/globalErrorHandler"));
const router_1 = __importDefault(require("./app/routes/router"));
const app = (0, express_1.default)();
/* *
***NOTICE***
--------------
 1. server.ts file holding the database information.If you want to change or uses other datebase     change it in server.ts file.

 2. Application diagram like that -->
    server.ts
        app.ts
            router
                controller
                    services

 3. every module have Model, route,controller and services file.
    model file defining schema of data types
    route file defining of api routes
    controller file handle request and responses
    services file handle database operation


BE CAREFULL TO CHANGEING ANYTHING
*/
// cors file using for cross-origin acceptation
app.use((0, cors_1.default)());
//parser
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
//application routes
// all routes are setting in router.ts file.Please update carefully
app.use("/api", router_1.default);
app.get("/", (req, res) => {
    res.send("Hello World!");
});
// handle not found
app.use((req, res, next) => {
    res.status(http_status_1.default.NOT_FOUND).json({
        success: false,
        message: "Route Not found!!!",
        errorMessages: [
            {
                path: req.originalUrl,
                message: "Route not found",
            },
        ],
    });
    next();
});
//global error handler
app.use(globalErrorHandler_1.default);
exports.default = app;
