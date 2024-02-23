const express = require("express");
const route = express.Router();

// Importando funções de cada controller:
const homeController = require("./src/controllers/homeController");
const loginController = require('./src/controllers/loginController');
const contatoController = require('./src/controllers/contatoController');

// Importando Middleware:
const { loginRequired } = require('./src/middlewares/globalMiddleware');

//Rotas da home:
route.get("/", homeController.index);// route.post("/", homeController.index);

//Rotas da login:
route.get("/login/index", loginController.index);
route.post("/login/register", loginController.register);
route.post("/login/login", loginController.login);
route.get("/login/logout", loginController.logout);

//Rotas de contato:
route.get("/contato/index", loginRequired, contatoController.index);
route.post("/contato/register", loginRequired, contatoController.register);
route.get("/contato/index/:id", loginRequired, contatoController.editIndex);
route.post("/contato/edit/:id", loginRequired, contatoController.edit);
route.get("/contato/delete/:id", loginRequired, contatoController.delete);



//Exportar para ser importado na server:
module.exports = route;
