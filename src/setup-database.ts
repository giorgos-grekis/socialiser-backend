import mongoose from "mongoose";
import Logger from "bunyan";
import { config } from "./config";

const log: Logger = config.createLogger("database");

export default () => {
  const connect = () => {
    mongoose
      .connect(`${config.DATABASE_URL}`)
      .then(() => {
        log.info("Successfully connected to database.");
      })
      .catch((error) => {
        log.info("Error connecting to database", error);

        // exit the current work process
        return process.exit(1);
      });
  };

  connect();

  mongoose.connection.on("disconnected", connect);
};
