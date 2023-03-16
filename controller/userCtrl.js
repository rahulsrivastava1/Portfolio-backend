const User = require("../models/userModels");

const userCtrl = {
  add: async (req, res) => {
    try {
      const data = req.body;
      if (data.constructor === Object && Object.keys(data).length === 0) {
        return res.status(400).json({ msg: "send valid message" });
      }
      const newUser = await User(data);
      newUser.save();
      res.status(200).json({ msg: "message successfully posted." });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
};

module.exports = userCtrl;
