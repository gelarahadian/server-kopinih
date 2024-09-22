import bcrypt from "bcryptjs";
import User from "../models/user.js";

const signUp = async (req, res) => {
  const { username, email, password } = req.body;
  console.log(req.body);

  if (!username || !email || !password) {
    return res.status(400).json("Username Email or Password is required");
  }

  //    check if email exists
  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return res.status(400).json("Email already exists");
  }

  //    hash password
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log(hashedPassword);

  //    create new user
  const newUser = new User({ username, email, password: hashedPassword });
  await newUser.save();

  res.status(200).json({
    message: "User saved successfully",
    status: "success",
    data: newUser,
  });
};

const signIn = async (req, res) => {
  const { email, password } = req.body;

  // check if email exists
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return res.status(400).json("User not found");
  }

  // check password
  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res.status(400).json("Invalid credentials");
  }

  res.status(200).json({
    message: "User authenticated successfully",
    status: "success",
    data: user,
  });
};

export { signUp, signIn };
