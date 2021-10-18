const mongoose =  require("mongoose");

const TarefasService = require("./../services/tarefas.service");

const tarefasService = new TarefasService();

class TarefasController{
    getTarefas = async (req, res) => {
        const tarefas = await tarefasService.findAll();
        res.send(tarefas);
    }
    getTarefasId = async (req, res) => {
        const byId = req.params.id;
        if(!mongoose.Types.ObjectId.isValid(byId)) {
            res.status(403).send("O id informado é inválido. Tente novamente.");
            return;
        }
        const tarefa = await tarefasService.findById(byId);

        if(!tarefa) {
            res.status(404).send('A tarefa não foi encontrada.');
            return
        }
        res.status(200).send(tarefa);
    }
    createTarefa = async (req, res) => {
        const tarefa = req.body;
        const tarefaSalva = await tarefasService.createTarefa(tarefa);
        res.send({ message: `A tarefa ${tarefaSalva.titulo} criada com sucesso!`});
    }
    editTarefa = async (req, res) => {
        const id = req.params.id;
        const tarefa = req.body;
        await tarefasService.editTarefa(id, tarefa)
        .then(() => {
            res.status(200).send({message: `A tarefa ${tarefa.titulo} foi atualizada com sucesso!`});
        })
        .catch((err) => res.status(500).send({error:`Erro no servidor: ${err}. Tente novamente.`}));
    }
    deleteTarefa = async (req, res) => {
        const id = req.params.id;
        await tarefasService.deleteTarefa(id)
        .then(() => {
            res.status(200).send({message: `A tarefa foi excluída com sucesso`})
        })
        .catch((err) => res.status(404).send({error: `Tarefa não encontrada. Erro: ${err}. Tente novamente. `}));
    }

}

module.exports = TarefasController;