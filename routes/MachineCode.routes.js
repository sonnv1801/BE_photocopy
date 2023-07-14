const router = require("express").Router();

const machineCodeController = require("../controllers/MachineCode.controller");

router.get("/", machineCodeController.getAllCode);
router.post("/", machineCodeController.createCode);
router.delete("/:id", machineCodeController.deleteCode);

module.exports = router;
