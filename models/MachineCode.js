const mongoose = require("mongoose");

const machineCodeSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  created_at: { type: Date, default: Date.now },
  update_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model("MachineCode", machineCodeSchema);
