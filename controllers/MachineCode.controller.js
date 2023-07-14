const MachineCode = require("../models/MachineCode");

const machineCodeController = {
  createCode: async (req, res) => {
    try {
      const { name } = req.body;
      const newCode = new MachineCode({
        name,
      });
      const saveCode = await newCode.save();
      res.status(201).json(saveCode);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getAllCode: async (req, res) => {
    try {
      const code = await MachineCode.find();
      res.status(200).json(code);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deleteCode: async (req, res) => {
    try {
      const combo = await MachineCode.findByIdAndDelete(req.params.id);
      res.status(200).json("Del successfully");
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = machineCodeController;
