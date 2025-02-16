const express = require("express");
const router = express.Router();
const projectController = require("../controllers/projectController");

router.get("/", projectController.getAllProjects);
router.get("/:id/members", projectController.getProjectMembers);

module.exports = router;
