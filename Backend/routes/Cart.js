const express = require("express");
const { addToCart, fetchCartByUser } = require("../controller/Cart");
const router = express.Router();

//base path for products as it is already added in base path
router.post("/", addToCart).get("/", fetchCartByUser);

exports.router = router;
