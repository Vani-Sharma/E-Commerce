const express = require("express");
const server = express();
const mongoose = require("mongoose");
const cors = require("cors");
const { createProduct } = require("./controller/Product");
const productRouter = require("./routes/Products");
const brandRouter = require("./routes/Brands");
const categoryRouter = require("./routes/Categories");

//middleware
server.use(
  cors({
    exposedHeaders: ["X-Total-Count"],
  })
);
server.use(express.json()); //to parse req.body ---> expecting json body from frontend
server.use("/products", productRouter.router);
server.use("/brands", brandRouter.router);
server.use("/category", categoryRouter.router);
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/ecommerce");
  console.log("db started");
}

server.get("/", (req, res) => {
  res.json({ status: "success" });
});

server.post("/products", createProduct);

server.listen(8080, () => {
  console.log("server started");
});
