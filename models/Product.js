import mongoose from "../config/mongoose.config.js";

const productSchema = mongoose.Schema({
  name: String,
  description: String,
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
  type: { type: mongoose.Schema.Types.ObjectId, ref: "Type" },
  price: Number,
  image: String,
});

const Product = mongoose.model("Product", productSchema);

export default Product;
