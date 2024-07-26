import purchases from "../models/purchases.js";

// solicitar la entidad compra
async function list(req, res) {
  try {
    const purchasesList = await purchases.find();
    res.json(purchasesList);
  } catch (err) {
    res.status(500).json({ error: "Server Error", message: err.message });
    console.error("Error al crear el carrito:", err);
  }
}

//Solicitar UNA compra
async function listOne(req, res) {
  try {
    const purchaseId = req.params.id;
    const requestedPurchase = await purchases.findById(purchaseId);
    res.status(200).json(requestedPurchase);
  } catch (err) {
    console.error("Error al obtener la compra:", err);
  }
}

//Registrar una compra
async function create(req, res) {
  try {
    const newPurchases = await purchases.create({
      userId: req.body.userId,
      products: req.body.products,
      total: req.body.total, // caracteristica añadida jct
      paymentMethod: req.body.paymentMethod,
    });
    res.json(newPurchases);
  } catch (err) {
    res.status(500).json({ error: "Server Error", message: err.message });
    console.error("Error al crear el carrito:", err);
  }
}

//Modificar una compra
async function update(req, res) {
  try {
    const purchaseModified = await purchases.findById(req.params.id);
    purchaseModified.userID = req.body.userID || purchaseModified.userID;
    purchaseModified.products = req.body.products || purchaseModified.products;
    purchaseModified.total = req.body.total || purchaseModified.total;
    purchaseModified.paymentMethod =
      req.body.paymentMethod || purchaseModified.paymentMethod;

    await purchaseModified.save();
    res.json(purchaseModified);
  } catch (err) {
    res.status(500).json({ error: "Server Error", message: err.message });
  }
}

//Eliminar una compra
async function deletePurchase(req, res) {
  try {
    await purchases.findByIdAndDelete(req.params.id);
    res.json("Categoría eliminada");
  } catch {
    res.status(500).json({ error: "Server Error", message: err.message });
    console.error("Error al eliminar la compra:", err);
  }
}

export default {
  list,
  listOne,
  create,
  update,
  deletePurchase,
};
