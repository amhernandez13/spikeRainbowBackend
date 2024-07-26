import mongoose from "../config/mongoose.config.js";

const productSchema = mongoose.Schema({
  name: String,
  description: String,
  ref: Number,
  size: String,
  color: String,
  stock: Number,
  price: Number,
  image: String,
});

const Product = mongoose.model("Product", productSchema);

export default Product;
