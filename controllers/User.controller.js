const User = require("../models/User");

const userController = {
  getAllUser: async (req, res) => {
    try {
      const users = await User.find();

      res.json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  getAllStaff: async (req, res) => {
    try {
      const users = await User.find({ role: "1" }); // Lấy tất cả người dùng có role = 1
      res.json(users);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
  deleteUser: async (req, res) => {
    try {
      const user = await User.findByIdAndDelete(req.params.id); // Tìm và xóa người dùng theo ID
      if (!user) {
        return res.status(404).json({ message: "Người dùng không tồn tại" });
      }
      res.json({ message: "Người dùng đã được xóa" });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
};

module.exports = userController;
