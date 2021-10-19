const mongoose = require("mongoose");

const Conn = () => {
    mongoose.connect('mongodb://localhost:27017/tarefas', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB conectado'))
    .catch((err) => console.log('Erro no Mongo', err))
}

module.exports = Conn;