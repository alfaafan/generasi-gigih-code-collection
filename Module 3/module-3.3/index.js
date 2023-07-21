import "dotenv/config.js";
import express from "express";
import mongoose from "mongoose";
import router from "./routes/index.js";
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// mongodb config
const mongoURL = process.env.MONGO_URL;

mongoose.connect(mongoURL);
const database = mongoose.connection;

database.on("error", (error) => {
  console.error(error);
});

database.once("connected", () => {
  console.log("Database connected");
});

// routes
app.use("/api", router);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
