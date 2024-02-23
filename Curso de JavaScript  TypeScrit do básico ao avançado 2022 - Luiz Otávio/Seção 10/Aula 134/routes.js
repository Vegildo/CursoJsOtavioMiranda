const express = require("express");
const route = express.Router();

// Importanto funções de cada controller:
const homeController = require("./src/controllers/homeController");
const contaController = require("./src/controllers/contaController");
const formController = require("./src/controllers/formController");
const meuController = require("./src/controllers/meuController");

//Rotas da home:
route.get("/", homeController.pagInicial);

// Rotas da contato:
route.get("/contato", contaController.pagConta);

// Rotas da form:
route.get("/form", formController.pagForm);
route.post("/form", formController.postForm);

//Rotas da meu:
route.get("/meu", meuController.pagMeu);
route.post("/meu", meuController.postMeu);

//Exportar para ser importado na server:
module.exports = route;
