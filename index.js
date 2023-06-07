import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.js";

dotenv.config();

const app = express();
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to Database");
  })
  .catch((error) => {
    console.log(error);
  });

app.get("/api/test", (req, res) => {
  res.status(200).json("Ecommerce API !!!");
});

app.use("/api/user", userRouter);
app.listen(process.env.PORT || 1000, () => {
  console.log("Backend server is running.......");
});
