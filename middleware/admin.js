import User from "../models/user.js";

export const isAdmin = async (req, res, next) => {
  try {
    const user = await User.findById(req.userId);
    if (!user || user.role !== "admin") {
      return res.status(403).json("Forbidden");
    }
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json("Server Error");
  }
};
