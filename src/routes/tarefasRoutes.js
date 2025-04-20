const express = require("express");
const router = express.Router();

const tarefasController = require("../controller/tarefasController");
const validateTarefa = require("../middlewares/validateTarefas");

// Rotas RESTful
router.get("/tarefas", tarefasController.listarTarefas);
router.get("/tarefas/:id", tarefasController.buscarTarefaPorId);
router.post("/tarefas", validateTarefa, tarefasController.criarTarefa);
router.put("/tarefas/:id", validateTarefa, tarefasController.atualizarTarefa);
router.patch("/tarefas/:id/concluir", tarefasController.concluirTarefa);
router.delete("/tarefas/:id", tarefasController.deletarTarefa);

module.exports = router;
