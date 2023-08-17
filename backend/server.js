import express from "express";
import data from "./data.js";

const app = express();
app.get("/api/products", (req, res) => {
  res.send(data.products);
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  //   console.log(`Server Started `);
  console.log(`Server starts at http://localhost:${port} ✅`);
});
