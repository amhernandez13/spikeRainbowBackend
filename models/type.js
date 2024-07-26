import mongoose from "../config/mongoose.config.js";

const typeSchema = mongoose.Schema({
  name: String,
  fromProduct: String,
  priceIncrement: Number,
});

const type = mongoose.model("Type", typeSchema);

export default type;
