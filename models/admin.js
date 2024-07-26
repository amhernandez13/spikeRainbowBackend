import mongoose from "../config/mongoose.config.js";

const adminSchema = mongoose.Schema({
    
  name: String,
  lastname: String,
  identification: Number,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    match: /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{6,}$/,
  },
  movil: Number,
  authorized: Boolean,
});

const Admin = mongoose.model("Admin", adminSchema);

export default Admin;