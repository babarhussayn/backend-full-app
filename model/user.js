import mongoose from "mongoose";
import bcrypt from "bcrypt";
const userSchema = new mongoose.Schema(
  {
    name: {
      type: "string",
      required: true["please enter your name"],
    },
    email: {
      type: "string",
      required: true["please enter email"],
     
      trim: true,
    },
    password: {
      type: "string",
      required: true["please enter password"],
      trim: true,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 12);

  next();
});
const User = mongoose.model('User',userSchema)

export default User;