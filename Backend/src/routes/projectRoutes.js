const express = require("express");
const router = express.Router();
const projectController = require("../controllers/projectController");

router.post("/projetos", projectController.createProject);
router.get("/projetos", projectController.getAllProjects);

module.exports = router;
