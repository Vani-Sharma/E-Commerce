const { User } = require("../model/User");

exports.fetchUserById = async (req, res) => {
  const { id } = req.params;
  try {
    //used projection in findById to
    //return only essential things and not imp part such as password
    const users = await User.findById(id, "name email id").exec();
    res.status(200).json(users);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.updateUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByIdAndUpdate(id, req.body, {
      new: true, //returns new modified doc and not original old one
    });
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json(err);
  }
};
