import mongoose from "../config/mongoose.config.js";

const paymentSchema = mongoose.Schema({
  cash: Number,
  paypal: Number,
  pse: Number,
  //Billing Information ------
});

const Payment = mongoose.model("Payment", paymentSchema);

export default Payment;
