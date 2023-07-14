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
  getSuppliesByID: async (req, res) => {
    try {
      const suppliesId = req.params.id;
      const supplies = await MaintenanceSupplies.findById(suppliesId);

      if (!supplies) {
        return res.status(404).json({ message: "Supplies not found" });
      }

      res.json(supplies);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = maintenanceSuppliesController;
