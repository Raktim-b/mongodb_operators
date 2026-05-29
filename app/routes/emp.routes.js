const express = require("express");
const empController = require("../controller/emp.controller");
const router = express.Router();

router.post("/create", empController.createEmp);

module.exports = router;
