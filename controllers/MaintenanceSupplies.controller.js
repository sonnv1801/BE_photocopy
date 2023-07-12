const MaintenanceSupplies = require("../models/MaintenanceSupplies");

const maintenanceSuppliesController = {
  createSupplies: async (req, res) => {
    try {
      const { name, seri, note } = req.body;

      // Tạo một đối tượng mới từ dữ liệu được gửi từ client
      const newSupplies = new MaintenanceSupplies({
        name,
        seri,
        note,
      });

      // Lưu đối tượng mới vào cơ sở dữ liệu
      const savedSupplies = await newSupplies.save();

      res.status(201).json(savedSupplies);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  getAllSupplies: async (req, res) => {
    try {
      // Lấy tất cả các bản ghi từ cơ sở dữ liệu
      const supplies = await MaintenanceSupplies.find();

      res.status(200).json(supplies);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deleteSupplies: async (req, res) => {
    try {
      const combo = await MaintenanceSupplies.findByIdAndDelete(req.params.id);
      res.status(200).json("Del successfully");
    } catch (err) {
      res.status(500).json(err);
    }
  },
  getSuppliesByName: async (req, res) => {
    try {
      const maintenanceSupplies = await MaintenanceSupplies.findOne({
        name: req.params.name,
      });
      if (!maintenanceSupplies) {
        return res.status(404).json({ message: "Vật tư không tồn tại" });
      }
      res.json(maintenanceSupplies);
    } catch (err) {
      console.error(err);
      res
        .status(500)
        .json({ message: "Đã xảy ra lỗi trong quá trình xử lý yêu cầu" });
    }
  },
};

module.exports = maintenanceSuppliesController;
