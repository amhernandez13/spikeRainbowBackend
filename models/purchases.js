import mongoose from "../config/mongoose.config.js";

const purchasesSchema = mongoose.Schema({
  id: String,
  userId: mongoose.Types.ObjectId,
  products: [mongoose.Types.ObjectId],
  total: Number,
  paymentMethod: mongoose.Types.ObjectId,
});

const purchases = mongoose.model("purchases", purchasesSchema);

export default purchases;
