const mongoose = require("mongoose");

const machineLocationSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  created_at: { type: Date, default: Date.now },
  update_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model("MachineLocation", machineLocationSchema);
