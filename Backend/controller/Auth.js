const { User } = require("../model/User");

//works on login signup related tasks

exports.createUser = async (req, res) => {
  //this user we get from API body
  const user = new User(req.body);
  try {
    const doc = await user.save();
    res.status(201).json(doc);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.loginUser = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email }).exec();
    if (!user) {
      res.status(401).json({ message: "no user found" });
    } else if (user.password === req.body.password) {
      res.status(201).json({ id: user.id, email: user.email, name: user.name });
    } else res.status(401).json({ message: "invalid credential" });
  } catch (err) {
    res.status(400).json(err);
  }
};
