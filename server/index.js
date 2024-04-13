import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import kpiRoutes from './routes/kpi.js';
import KPI from "./models/KPI.js";
import {kpis} from "./data/data.js";
// import Kpi from "./data/data2.js";


// mongoose
//   .connect('mongodb+srv://nidhipoojary1211:Harekrishna01*@cluster0.kft3amf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
mongoose.connect('mongodb+srv://nidhipoojary1211:nidhi1234@devopia.guhrqwt.mongodb.net/dev?retryWrites=true&w=majority&appName=devopia')
  .then(async () => {
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
    KPI.insertMany(kpis);
  })
  .catch((error) => console.error("MongoDB connection error:", error));


dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());


app.use('/kpi', kpiRoutes);
console.log("Server starting...");




const PORT = process.env.PORT || 9000;
