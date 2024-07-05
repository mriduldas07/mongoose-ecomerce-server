import cors from "cors";
import express, { Application, NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import globalErrorHandler from "./app/middleware/globalErrorHandler";
import router from "./app/routes/router";

const app: Application = express();

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
app.use(cors());

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//application routes
// all routes are setting in router.ts file.Please update carefully
app.use("/api", router);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// handle not found
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
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
app.use(globalErrorHandler);

export default app;
