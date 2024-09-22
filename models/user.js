import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: String,
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: String,
    role: String,
    Image: String,
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;
