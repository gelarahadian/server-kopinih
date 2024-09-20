const express = require("express");
const cors = require("cors");
const routes = require("./routes/routes");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("Hello, This is start of the application");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
