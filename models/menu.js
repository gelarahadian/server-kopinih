import mongoose from "mongoose";

const menuSchema = new mongoose.Schema(
  {
    name: String,
    price: Number,
    description: String,
    available: Boolean,
  },
  {
    timestamps: true,
  }
);

const Menu = mongoose.model("Menu", menuSchema);

export default Menu;
