const express = require("express");
const {
  createOrder,
  fetchOrderByUser,
  deleteOrder,
  updateOrder,
} = require("../controller/Order");
const router = express.Router();

//base path for orders as it is already added in base path
router
  .post("/", createOrder)
  .get("/", fetchOrderByUser)
  .delete("/:id", deleteOrder)
  .patch("/:id", updateOrder);

exports.router = router;
