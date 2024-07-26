import Payment from "../models/payment.js";

//Solicitar lista de todos los metodos de pago
async function list(req, res) {
  try {
    const payment = await Payment.find();
    res.json(payment);
  } catch (err) {
    res.status(500).json("Server Error");
  }
}

// Solicitar la informacion de UN metodo de pago
async function listOne(req, res) {
  try {
    const paymentId = req.params.id;
    const paymentSolicitado = await Payment.findById(paymentId);
    res.status(200).json(paymentSolicitado);
  } catch (err) {
    console.error("Error al obtener el metodo de pago:", err);
  }
}

//añadir metodo de pago
async function create(req, res) {
  try {
    const newPayment = await Payment.create({
      cash: req.body.cash,
      paypal: req.body.paypal,
      pse: req.body.pse,
    });
    res.json(newPayment);
  } catch (err) {
    res.status(500).json({ error: "Server Error", message: err.message });
    console.error("Error al añadir el metodo de pago:", err);
  }
}

//Modificar parcialmente un producto
async function update(req, res) {
  try {
    const paymentModified = await Payment.findById(req.params.id);
    paymentModified.cash = req.body.cash || paymentModified.cash;
    paymentModified.paypal = req.body.paypal || paymentModified.paypal;
    paymentModified.pse = req.body.pse || paymentModified.pse;

    await paymentModified.save();
    res.json(paymentModified);
  } catch (err) {
    res.status(500).json({ error: "Server Error", message: err.message });
  }
}

//Eliminar metodo de pago
async function deletePayment(req, res) {
  try {
    await Payment.findByIdAndDelete(req.params.id);
    res.json("Metodo de pago eliminado");
  } catch {
    res.status(500).json({ error: "Server Error", message: err.message });
    console.error("Error al eliminar el metodo de pago:", err);
  }
}

export default {
  list,
  listOne,
  create,
  update,
  deletePayment,
};
