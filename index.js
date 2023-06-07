import express from "express";
import mongoose from "mongoose";

const app = express();

mongoose.connect(
  "mongodb+srv://arjunn881:admin@cluster0.kphrut6.mongodb.net/?retryWrites=true&w=majority"
).then(()=>{
    console.log("Connected to Database");
}).catch(((error)=>{
    console.log(error);
}));
app.listen(1000, () => {
  console.log("Backend server is running.......");
});
