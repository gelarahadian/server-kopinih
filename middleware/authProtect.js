import jwt from "jsonwebtoken";

const protect = (req, res, next) => {
  let token;

  const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      const decoded = jwt.verify(token, JWT_SECRET_KEY);

      req.userId = decoded.id;

      next();
    } catch (err) {
      res.status(401).json({ message: err.message });
    }
  }

  if (!token) {
    res.status(401).json({ message: "Not authorized, no token" });
  }
};

export default protect;
