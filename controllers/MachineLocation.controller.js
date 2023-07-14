const MachineLocation = require("../models/MachineLocation");

const machineLocationController = {
  createLocation: async (req, res) => {
    try {
      const { name } = req.body;
      const newLocation = new MachineLocation({
        name,
      });
      const saveCode = await newLocation.save();
      res.status(201).json(saveCode);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getAllLocation: async (req, res) => {
    try {
      const loaction = await MachineLocation.find();
      res.status(200).json(loaction);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deleteLocation: async (req, res) => {
    try {
      const loaction = await MachineLocation.findByIdAndDelete(req.params.id);
      res.status(200).json("Del successfully");
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = machineLocationController;
