const router = require("express").Router();

const maintenanceSuppliesController = require("../controllers/MaintenanceSupplies.controller");

router.post("/", maintenanceSuppliesController.createSupplies);
router.get("/", maintenanceSuppliesController.getAllSupplies);
router.get("/:id", maintenanceSuppliesController.getSuppliesByID);
router.delete("/:id", maintenanceSuppliesController.deleteSupplies);

module.exports = router;
