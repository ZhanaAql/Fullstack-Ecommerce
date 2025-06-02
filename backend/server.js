import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoutes.js";
import productRouter from "./routes/productRoutes.js";
import cartRouter from "./routes/cartRoutes.js";
import orderRouter from "./routes/orderRoute.js";

//App Config
const app = express();
const port = process.env.PORT || 4000;
const cors = require("cors");
connectDB();
connectCloudinary();

//middlewares

app.use(express.json());
app.use(
  cors({
    origin: [
      "http://localhost:5173", // untuk dev lokal
      "https://fullstack-ecommerce-six-livid.vercel.app", // domain Vercel frontend
    ],
    credentials: true,
  })
);

//API endpoints
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.get("/", (req, res) => {
  res.send("API working");
});

app.listen(port, () => console.log("server started on PORT: " + port));
