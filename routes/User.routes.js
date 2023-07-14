const router = require("express").Router();

const userController = require("../controllers/User.controller");

router.get("/", userController.getAllUser);
router.get("/staff", userController.getAllStaff);
router.delete("/:id", userController.deleteUser);

module.exports = router;
