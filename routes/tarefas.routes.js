const express = require('express');

const router = express.Router();

const TarefasController = require('./../controllers/tarefas.controller');

const tarefasController = new TarefasController();

router.get('/', tarefasController.getTarefas);

router.get('/:id', tarefasController.getTarefasId);

router.post('/add', tarefasController.createTarefa);

router.put('/:id', tarefasController.editTarefa);

router.delete('/:id', tarefasController.deleteTarefa);

module.exports = router;