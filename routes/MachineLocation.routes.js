const router = require("express").Router();

const machineLocationController = require("../controllers/MachineLocation.controller");

router.get("/", machineLocationController.getAllLocation);
router.post("/", machineLocationController.createLocation);
router.delete("/:id", machineLocationController.deleteLocation);

module.exports = router;
