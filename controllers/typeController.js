import Type from "../models/type.js";

//Solicitar lista de tipos
async function typeList(req, res) {
  try {
    const tipo = await Type.find();
    res.json(tipo);
  } catch (err) {
    res.status(500).json("Server Error");
  }
}

//Solicitar informacion de UN tipo
async function listOne(req, res) {
  try {
    const typeId = req.params.id;
    const typeSolicitada = await Type.findById(typeId);
    res.status(200).json(typeSolicitada);
  } catch (err) {
    console.error("Error al obtener el tipo:", err);
  }
}

//Crear un tipo
async function typeCreate(req, res) {
  try {
    const newType = await Type.create({
      name: req.body.name,
      fromProduct: req.body.fromProduct,
      priceIncrement: req.body.priceIncrement,
    });
    res.json(newType);
  } catch (err) {
    res.status(500).json({ error: "Server Error", message: err.message });
    console.error("Error al crear el tipo:", err);
  }
}

//Modificar parcialmente un tipo
async function update(req, res) {
  try {
    const typeModified = await Type.findById(req.params.id);
    typeModified.name = req.body.name || typeModified.name;
    typeModified.fromProduct = req.body.fromProduct || typeModified.fromProduct;
    typeModified.priceIncrement =
      req.body.priceIncrement || typeModified.priceIncrement;

    await typeModified.save();
    res.json(typeModified);
  } catch (err) {
    res.status(500).json({ error: "Server Error", message: err.message });
  }
}

//Eliminar un tipo
async function deleteType(req, res) {
  try {
    await Type.findByIdAndDelete(req.params.id);
    res.json("Tipo eliminado");
  } catch {
    res.status(500).json({ error: "Server Error", message: err.message });
    console.error("Error al eliminar el tipo:", err);
  }
}

export default {
  typeList,
  listOne,
  typeCreate,
  update,
  deleteType,
};
