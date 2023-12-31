const router = require("express").Router();

const maintenanceController = require("../controllers/Maintenance.controller");

router.post("/", maintenanceController.createMaintenance);
router.get("/", maintenanceController.getAllMaintenance);
router.get("/:customerId", maintenanceController.getMaintenanceBycustomerId);
router.get("/staff/:staffId", maintenanceController.getMaintenanceByStaffId);
router.put("/:maintenanceId", maintenanceController.updateStaffAndSupplies);
router.put(
  "/staff/repairfinished/:maintenanceId",
  maintenanceController.repairfinished
);
router.delete("/:id", maintenanceController.deleteMaintenance);

router.post("/search", maintenanceController.searchMaintenance);

module.exports = router;
