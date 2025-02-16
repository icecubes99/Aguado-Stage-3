const express = require("express");
const router = express.Router();
const memberController = require("../controllers/memberController");
const { validateMember } = require("../middleware/memberValidation");

router.post("/", validateMember, memberController.createMember);
router.get("/", memberController.getAllMembers);

module.exports = router;
