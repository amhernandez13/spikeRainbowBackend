import "dotenv/config";

import { expressjwt } from "express-jwt";
import productsControllers from "./controllers/productsControllers.js";
import categoryControllers from "./controllers/categoryControllers.js";
import purchasesControllers from "./controllers/purchasesControllers.js";
import adminControllers from "./controllers/adminControllers.js";
import paymentControllers from "./controllers/paymentControllers.js";
import express from "express";
import usersControllers from "./controllers/usersControllers.js";
import cors from "cors";
import authControllers from "./controllers/authControllers.js";
import orderController from "./controllers/orderController.js";


const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

console.log("JWT_SECRET:", process.env.JWT_SECRET); // Agregado para depuración

// Rutas de admin
app.get("/api/admin", adminControllers.list);
app.get("/api/admin/:id", adminControllers.listOne);
app.post("/api/admin", adminControllers.create);
app.post("/api/admin/login", adminControllers.login);
app.patch("/api/admin/:id", adminControllers.update);
app.delete("/api/admin/:id", adminControllers.deleteAdmin);
// Ruta privada
app.post(
  "/api/admin/profile",
  expressjwt({ algorithms: ["HS256"], secret: process.env.JWT_SECRET }),
  adminControllers.profile
);

// Rutas de users
app.get("/api/users", usersControllers.list);
app.get("/api/users/:id", usersControllers.listOne);
app.post("/api/users", usersControllers.create);
app.post("/api/users/login", usersControllers.login);
app.patch("/api/users/:id", usersControllers.update);
app.delete("/api/users/:id", usersControllers.deleteUsers);
// Ruta privada
app.post(
  "/api/users/profile",
  expressjwt({ algorithms: ["HS256"], secret: process.env.JWT_SECRET }),
  usersControllers.profile
);

// Rutas de product
app.get("/api/product", productsControllers.list);
app.get("/api/product/:id", productsControllers.listOne);
app.post("/api/product", productsControllers.create);
app.patch("/api/product/:id", productsControllers.update);
app.delete("/api/product/:id", productsControllers.deleteProduct);

// Rutas de purchases
app.get("/api/purchases", purchasesControllers.list);
app.get("/api/purchases/:id", purchasesControllers.listOne);
app.post("/api/purchases", purchasesControllers.create);
app.patch("/api/purchases/:id", purchasesControllers.update);
app.delete("/api/purchases/:id", purchasesControllers.deletePurchase);

// Rutas de payment
app.get("/api/payment", paymentControllers.list);
app.get("/api/payment/:id", paymentControllers.listOne);
app.post("/api/payment", paymentControllers.create);
app.patch("/api/payment/:id", paymentControllers.update);
app.delete("/api/payment/:id", paymentControllers.deletePayment);

// Rutas de category
app.get("/api/category", categoryControllers.categoryList);
app.get("/api/category/:id", categoryControllers.listOne);
app.post("/api/category", categoryControllers.categoryCreate);
app.patch("/api/category/:id", categoryControllers.update);
app.delete("/api/category/:id", categoryControllers.deleteCategory);

// Rutas de Auth
app.post("/api/auth/login", authControllers.login);
app.post("/api/auth/register", usersControllers.create);
app.post("/api/auth/validate", authControllers.tokenIsValid)

// Rutas de order
app.post(
  "/api/orders", 
  expressjwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }), 
  orderController.create);

app.get(
  "/api/orders", 
  expressjwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }), 
  orderController.list);

app.get("/api/rutaprivada", expressjwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }), async (req, res) => {
  return res.json("Ruta privada")
})

app.listen(3000, () => {
  console.log("servidor corriendo en el puerto 3000");
});
