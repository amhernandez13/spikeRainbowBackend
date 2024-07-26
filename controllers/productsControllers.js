import Product from "../models/Product.js";

//Solicitar lista de todos los productos
async function list(req, res) {
  try {
    const productos = await Product.find();
    res.json(productos);
  } catch (err) {
    res.status(500).json("Server Error");
  }
}

// Solicitar la informacion de UN producto
async function listOne(req, res) {
  try {
    const productId = req.params.id;
    const productoSolicitado = await Product.findById(productId);
    res.status(200).json(productoSolicitado);
  } catch (err) {
    console.error("Error al obtener el producto:", err);
  }
}

//crear un producto
async function create(req, res) {
  try {
    const newProduct = await Product.create({
      name: req.body.name,
      description: req.body.description,
      ref: req.body.ref,
      size: req.body.size, // caracteristica añadida jct
      color: req.body.color,
      stock: req.body.stock,
      price: req.body.price,
      image: req.body.image,
    });
    res.json(newProduct);
  } catch (err) {
    res.status(500).json({ error: "Server Error", message: err.message });
    console.error("Error al crear el producto:", err);
  }
}

//Modificar parcialmente un producto
async function update(req, res) {
  try {
    const productModified = await Product.findById(req.params.id);
    productModified.name = req.body.name || productModified.name;
    productModified.description =
      req.body.description || productModified.description;
    productModified.ref = req.body.ref || productModified.ref;
    productModified.size = req.body.size || productModified.size;
    productModified.color = req.body.color || productModified.color;
    productModified.stock = req.body.stock || productModified.stock;
    productModified.price = req.body.price || productModified.price;

    await productModified.save();
    res.json(productModified);
  } catch (err) {
    res.status(500).json({ error: "Server Error", message: err.message });
  }
}

//Eliminar un producto
async function deleteProduct(req, res) {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json("Producto eliminado");
  } catch {
    res.status(500).json({ error: "Server Error", message: err.message });
    console.error("Error al eliminar el producto:", err);
  }
}

export default {
  list,
  listOne,
  create,
  update,
  deleteProduct,
};
