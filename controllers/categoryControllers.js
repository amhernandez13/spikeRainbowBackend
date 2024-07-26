import Category from "../models/category.js";

//Solicitar lista de categorías
async function categoryList(req, res) {
  try {
    const categoria = await Category.find();
    res.json(categoria);
  } catch (err) {
    res.status(500).json("Server Error");
  }
}

//Solicitar informacion de UNA categoría
async function listOne(req, res) {
  try {
    const categoryId = req.params.id;
    const categorySolicitada = await Category.findById(categoryId);
    res.status(200).json(categorySolicitada);
  } catch (err) {
    console.error("Error al obtener la categoría:", err);
  }
}

//Crear una categoría
async function categoryCreate(req, res) {
  try {
    const newCategory = await Category.create({
      name: req.body.name,
      gender: req.body.gender,
    });
    res.json(newCategory);
  } catch (err) {
    res.status(500).json({ error: "Server Error", message: err.message });
    console.error("Error al crear la categoría:", err);
  }
}

//Modificar parcialmente una categoría
async function update(req, res) {
  try {
    const categoryModified = await Category.findById(req.params.id);
    categoryModified.name = req.body.name || categoryModified.name;
    categoryModified.gender = req.body.gender || categoryModified.gender;

    await categoryModified.save();
    res.json(categoryModified);
  } catch (err) {
    res.status(500).json({ error: "Server Error", message: err.message });
  }
}

//Eliminar una categoría
async function deleteCategory(req, res) {
  try {
    await Category.findByIdAndDelete(req.params.id);
    res.json("Categoría eliminada");
  } catch {
    res.status(500).json({ error: "Server Error", message: err.message });
    console.error("Error al eliminar la categoría:", err);
  }
}

export default {
  categoryList,
  listOne,
  categoryCreate,
  update,
  deleteCategory,
};
