const express = require("express");
const app = express();

/**
 *         Criar  ||  Ler  || Atualizar || Apagar
 * CRUD => CREATE,||  READ,|| UPDATE,   || DELETE
 *         POST   ||  GET  || PUT       || DELETE
 */

app.get("/", (req, res) => {
  res.send(`
  <form action="/" method="POST">
  Nome: <input type="text" name="nome">
  <button>Enviar</button>
  </form>
  `);
});

app.post("/", (req, res) => {
  res.send("Recebi o formulário");
});

app.get("/contato", (req, res) => {
  res.send("Obrigado por entrar em contato com a gente.");
});

const port = 3000;
app.listen(port, () => {
  console.log(`🚀 HTTP server running on http://localhost:${port}`);
});
