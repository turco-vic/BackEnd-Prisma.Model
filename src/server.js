import express from "express";
import { config } from "dotenv";

config(); // Carrega variáveis de ambiente do arquivo .env
const port = process.env.PORT || 5000;

// Inicializa o Express
const app = express();

app.use(express.json()); // Parse de JSON

// Rota base para verificar se o servidor está rodando
app.get("/", (req, res) => {
    res.json({ message: "API de Usuários funcionando!" });
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`🚀🔥Servidor rodando na porta ${port}🔥🚀`);
});
