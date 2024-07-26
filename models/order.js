import mongoose from "../config/mongoose.config.js";

const orderSchema = mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User",
    },
    products: [
        {
            productDetail: {
                type: mongoose.Types.ObjectId,
                ref: "Product"
            },
            quantity: Number
        }
    ],

    name: String,
    contactNumber: Number,
    address: String,
    complement: String,    
    paymentMethod: String,
    total: Number,
    
});

const Order = mongoose.model("Order", orderSchema);

export default Order;