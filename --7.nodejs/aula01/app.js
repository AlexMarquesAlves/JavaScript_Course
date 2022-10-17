const path = require("path");
const axios = require("axios");
const { Pessoa } = require("./mod1");

// axios("https://www.otaviomiranda.com.br/files/json/pessoas.json")
//   .then((response) => console.table(response.data))
//   .catch((e) => console.error(e));

const p1 = new Pessoa("Luiz");
console.table(p1);
