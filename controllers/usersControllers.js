import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Users from "../models/users.js";

//Solicitar lista de todos los usuarios
async function list(req, res) {
  try {
    const users = await Users.find();
    res.json(users);
  } catch (err) {
    res.status(500).json("Server Error");
  }
}

// Solicitar la informacion de UN usuario
async function listOne(req, res) {
  try {
    const usersId = req.params.id;
    const usersSolicitado = await User.findById(usersId);
    res.status(200).json(usersSolicitado);
  } catch (err) {
    console.error("Error al obtener el usuario:", err);
  }
}

//añadir un usuario
async function create(req, res) {
  try {
    const contrasenia = req.body.password;
    const hash = await bcrypt.hash(contrasenia, 10);

    const newUsers = await Users.create({
      name: req.body.name,
      lastname: req.body.lastname,
      identification: req.body.identification,
      email: req.body.email,
      password: req.body.password,
      movil: req.body.movil,
    });
    res.json(newUsers);
  } catch (err) {
    res.status(500).json({ error: "Server Error", message: err.message });
    console.error("Error al añadir el usuario", err);
  }
}

//Modificar parcialmente un usuario
async function update(req, res) {
  try {
    const usersModified = await Users.findById(req.params.id);
    usersModified.name = req.body.name || usersModified.name;
    usersModified.lastname = req.body.lastname || usersModified.lastname;
    usersModified.identification =
      req.body.identification || usersModified.identification;
    usersModified.email = req.body.email || usersModified.email;
    usersModified.password = req.body.password || usersModified.password;
    usersModified.movil = req.body.movil || usersModified.movil;
    usersModified.authorized = req.body.authorized || usersModified.authorized;

    await usersModified.save();
    res.json(usersModified);
  } catch (err) {
    res.status(500).json({ error: "Server Error", message: err.message });
  }
}

//Eliminar un usuario
async function deleteUsers(req, res) {
  try {
    await Users.findByIdAndDelete(req.params.id);
    res.json("Usuario Eliminado");
  } catch {
    res.status(500).json({ error: "Server Error", message: err.message });
    console.error("Error al eliminar el usuario", err);
  }
}

async function login(req, res) {
  try {
    const users = await Users.findOne({ email: req.body.email });

    if (users !== null) {
      const hashValido = await bcrypt.compare(
        req.body.password,
        users.password
      );
      if (hashValido) {
        //Aqui valida el token
        const tokenPayload = {
          sub: users.id,
          iat: Date.now(),
        };
        const token = jwt.sign(tokenPayload, process.env.JWT_TOKEN);
        res.json({ token: token });
      } else {
        res.json("Tus credenciales no son validas");
      }
    } else {
      res.json("El usuario no existe");
    }
  } catch (err) {
    res.status(500).json("Internal Server Error");
  }
}

async function profile(req, res) {
  const { email } = await Users.findById(req.auth.sub);
  res.json(`Hola ${email}, te damos acceso a tu perfil`);
}

export default {
  list,
  listOne,
  create,
  update,
  deleteUsers,
  login,
  profile,
};
