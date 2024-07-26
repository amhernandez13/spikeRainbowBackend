import mongoose from "../config/mongoose.config.js";

const categorySchema = mongoose.Schema({
  name: String,
  gender: String,
});

const Category = mongoose.model("Category", categorySchema);

export default Category;
