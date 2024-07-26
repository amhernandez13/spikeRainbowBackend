import mongoose from "../config/mongoose.config.js";
import bcrypt from "bcryptjs";

const userSchema = mongoose.Schema(
  {
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
      match:
        /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{6,}$/,
    },
    movil: Number,
  },
  {
    methods: {
      async hashCompare(string) {
        return bcrypt.compare(string, this.password);
      },
    },
  }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  try {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
    next();
  } catch (err) {
    next(err);
  }
});

const Users = mongoose.model("user", userSchema);

export default Users;
