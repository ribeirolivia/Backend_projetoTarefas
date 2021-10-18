const express = require("express");
const cors = require("cors");

const Conn = require("./conn/conn");
const TarefasRoutes = require ("./routes/tarefas.routes");

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
Conn();

app.use("/tarefas", TarefasRoutes);

app.listen(port, () => console.log(`App rodando -> http://localhost:${port}/`));
