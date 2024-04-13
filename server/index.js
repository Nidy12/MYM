
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import kpiRoutes from "./routes/kpi.js";
import productRoutes from "./routes/product.js";
import transactionRoutes from "./routes/transaction.js";
import KPI from "./models/KPI.js";
import Product from "./models/Product.js";
import Transaction from "./models/Transaction.js";
import { kpis } from "./data/data.js";




dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
// app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
/* ROUTES */

app.use("/product", productRoutes);
app.use("/transaction", transactionRoutes);


app.use('/kpi', kpiRoutes);
console.log("Server starting...");




const PORT = process.env.PORT || 9000;


mongoose.connect('mongodb+srv://nidhipoojary1211:nidhi1234@devopia.guhrqwt.mongodb.net/')
  .then(async () => {
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
    // KPI.insertMany(kpis);
  })
  .catch((error) => console.error("MongoDB connection error:", error));