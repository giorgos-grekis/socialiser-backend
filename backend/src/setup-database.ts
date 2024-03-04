import mongoose from "mongoose";
import { config } from "./config";

export default () => {
  const connect = () => {
    mongoose
      .connect(`${config.DATABASE_URL}`)
      .then(() => {
        console.log("Successfully connected to database.");
      })
      .catch((error) => {
        console.error("Error connecting to database", error);

        // exit the current work process
        return process.exit(1);
      });
  };

  connect();

  mongoose.connection.on("disconnected", connect);
};
