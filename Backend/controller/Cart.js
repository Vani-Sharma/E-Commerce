const { Cart } = require("../model/Cart");

exports.fetchCartByUser = async (req, res) => {
  const { user } = req.query;
  try {
    //populate returns all values of that item
    const cartItem = Cart.find({ user: user })
      .populate("user")
      .populate("product");
    // console.log(cartItem);
    res.status(200).json(cartItem);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.addToCart = async (req, res) => {
  //this Cart we get from API body
  const cart = new Cart(req.body);
  try {
    const doc = await cart.save();
    res.status(201).json(doc);
  } catch (err) {
    res.status(400).json(err);
  }
};
