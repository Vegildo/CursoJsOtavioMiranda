const express = require("express");
const route = express.Router();

// Importanto funções de cada controller:
const homeController = require("./src/controllers/homeController");
const loginController = require('./src/controllers/loginController');

//Rotas da home:
route.get("/", homeController.index);// route.post("/", homeController.index);

//Rotas da login:
route.get("/login/index", loginController.index);
route.post("/login/register", loginController.register);

//Exportar para ser importado na server:
module.exports = route;
