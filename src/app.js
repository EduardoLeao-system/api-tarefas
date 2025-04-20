const express = require("express");
const morgan = require("morgan");
const tarefasRoutes = require("./routes/tarefasRoutes");

const app = express();
const PORT = 3000;

app.use(express.json()); // Permite receber JSON no body
app.use(morgan("tarefa")); // Log de requisições HTTP

app.use("/api", tarefasRoutes); // Rotas da API

app.get("/", (req, res) => {
  res.send("API CONFORME"); // Rota raiz
});

app.listen(PORT, () => {
  console.log(`Server rodando em http://localhost:${PORT}`); // Start do servidor
});
