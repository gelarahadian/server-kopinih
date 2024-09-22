const createMenu = async (req, res) => {
  const { name, description, price, category } = req.body;

  res.send("Hello is create menu");
};

export { createMenu };
