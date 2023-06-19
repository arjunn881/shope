import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.js";
import authRouter from "./routes/auth.js";
import productRouter from "./routes/product.js";
import cartRouter from "./routes/cart.js";
import orderRouter from "./routes/order.js";


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

app.get("/api", (req, res) => {
  res.status(200).json("Ecommerce API !!!");
});

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/products", productRouter)
app.use('/api/cart', cartRouter)
app.use('/api/orders', orderRouter)

app.listen(process.env.PORT || 1000, () => {
  console.log("Backend server is running.......");
});
