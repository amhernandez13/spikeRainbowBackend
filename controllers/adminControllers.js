import bcrypt from "bcryptjs";
import Admin from "../models/admin.js";

//Solicitar lista de todos los administradores
async function list(req, res) {
  try {
    const admin = await Admin.find();
    res.json(admin);
  } catch (err) {
    res.status(500).json("Server Error");
  }
}

// Solicitar la informacion de UN administrador
async function listOne(req, res) {
  try {
    const adminId = req.params.id;
    const adminSolicitado = await Admin.findById(adminId);
    res.status(200).json(adminSolicitado);
  } catch (err) {
    console.error("Error al obtener el administrador", err);
  }
}

//añadir un administrador
async function create(req, res) {
  try {
    const contrasenia = req.body.password;
    const hash = await bcrypt.hash(contrasenia, 10);

    const newAdmin = await Admin.create({
      name: req.body.name,
      lastname: req.body.lastname,
      identification: req.body.identification,
      email: req.body.email,
      password: hash,
      movil: req.body.movil,
      authorized: req.body.authorized,
    });
    res.json(newAdmin);
  } catch (err) {
    res.status(500).json({ error: "Server Error", message: err.message });
    console.error("Error al añadir el administrador", err);
  }
}

//Modificar parcialmente un administrador
async function update(req, res) {
  try {
    const adminModified = await Admin.findById(req.params.id);
    adminModified.name = req.body.name || adminModified.name;
    adminModified.lastname = req.body.lastname || adminModified.lastname;
    adminModified.identification = req.body.identification || adminModified.identification;
    adminModified.email = req.body.email || adminModified.email;
    adminModified.password = req.body.password || adminModified.password;
    adminModified.movil = req.body.movil || adminModified.movil;
    adminModified.authorized = req.body.authorized || adminModified.authorized;

    await adminModified.save();
    res.json(adminModified);
  } catch (err) {
    res.status(500).json({ error: "Server Error", message: err.message });
  }
}

//Eliminar un administrador
async function deleteAdmin(req, res) {
  try {
    await Admin.findByIdAndDelete(req.params.id);
    res.json("Administrador Eliminado");
  } catch {
    res.status(500).json({ error: "Server Error", message: err.message });
    console.error("Error al eliminar el administrador", err);
  }
}

async function login(req, res) {
  try {
  const admin = await Admin.findOne({ email: req.body.email });
  
  if(admin !== null) {
    const hashValido = await bcrypt.compare(req.body.password, admin.password);
    if(hashValido) {
      //Aqui valida el token
      const tokenPayload = {
        sub: admin.id,
        iat: Date.now(),
      };
      const token = jwt.sign(tokenPayload, process.env.JWT_TOKEN);
      res.json({ token: token });
    } else {
      res.json("Tus credenciales no son validas")
    }
  } else {
    res.json("El administrador no existe");
  }
} catch (err) {
  res.status(500).json("Internal Server Error");
 }
}

async function profile(req, res) {
  const { email } = await Admin.findById(req.auth.sub);
  res.json(`Hola ${email}, te damos acceso a tu perfil`)
}

export default {
  list,
  listOne,
  create,
  update,
  deleteAdmin,
  login,
  profile,
};
