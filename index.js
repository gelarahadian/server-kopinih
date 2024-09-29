import express from "express";
import cors from "cors";
import routes from "./routes/routes.js";
import dotenv from "dotenv";
import { connectDb } from "./models/index.js";
import { seed } from "./seed.js";

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

const PORT = process.env.PORT || 8000;

connectDb().then(async () => {
  app.listen(process.env.PORT, () =>
    console.log(`Kopinih app listening on port ${PORT}!`)
  );
});

app.get("/", (req, res) => {
  res.send("Hello, This is start of the application");
});

app.post("/seed", seed);
