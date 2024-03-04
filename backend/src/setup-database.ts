import mongoose from "mongoose";

export default () => {
  const connect = () => {
    mongoose
      .connect("mongodb://localhost:27017/socialiser")
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
