import mongoose from "mongoose";

const Schema = mongoose.Schema;

const kpiSchema = new Schema({
    data: {
        name: { type: String, default: "nidhi" }
    }
});

const Kpi = mongoose.model('Kpi', kpiSchema); // Define the model

export default Kpi; // Export the model
