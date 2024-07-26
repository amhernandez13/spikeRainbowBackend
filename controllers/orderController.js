import Order from "../models/order.js"

async function list(req, res) {
    try {
        const orders = await Order.find().populate("user").populate("products.productId");
        return res.json(orders)
    } catch (err) {
        console.log(err)
    }
}

async function create(req, res) {
    console.log("Purchase")
    try {
        const newOrder = await Order.create({
            products: req.body.products,
            user: req.auth.id,
            contactNumber: req.body.contactNumber,
            address: req.body.address,
            complement: req.body.complement,
            total: req.body.total,
            paymentMethod: req.body.paymentMethod,
        })
        return res.json(newOrder)
    } catch (err) {
        console.log(err)
    }

}

export default { list, create }