const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController");

router.post("/tarefas", taskController.createTask);
router.get("/tarefas/:projetoId", taskController.getTasksByProject);
router.patch("/tarefas/:id/concluir", taskController.markTaskAsDone);
router.delete("/tarefas/:id", taskController.deleteTask);

module.exports = router;
