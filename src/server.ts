/* eslint-disable no-console */
import { Server } from "http";
import mongoose from "mongoose";
import app from "./app";

process.on("uncaughtException", (err) => {
  console.log("uncaught exception detected...", err);
  process.exit(1);
});

let server: Server;
async function main() {
  try {
    await mongoose.connect(
      `mongodb+srv://mriduldas0325:kpYdboTxhUmMqegs@cluster0.ncxzsas.mongodb.net/ecommerce-mongose?retryWrites=true&w=majority&appName=Cluster0` as string
    );
    console.log("Database connected");
    server = app.listen(8000, () => {
      console.log(`Example app listening on port 8000`);
    });
  } catch (error) {
    console.log(error);
  }

  process.on("unhandledRejection", (err) => {
    if (server) {
      server.close(() => {
        console.log(err);
        process.exit(1);
      });
    } else {
      process.exit(1);
    }
  });
}

main();

process.on("SIGTERM", () => {
  console.log("SIGTERM recieved");
  if (server) {
    server.close();
  }
});
