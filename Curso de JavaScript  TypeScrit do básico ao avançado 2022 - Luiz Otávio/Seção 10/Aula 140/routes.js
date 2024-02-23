const express = require("express");
const route = express.Router();

// Importanto funções de cada controller:
const homeController = require("./src/controllers/homeController");
const contaController = require("./src/controllers/contaController");
const formController = require("./src/controllers/formController");
const meuController = require("./src/controllers/meuController");

// Importanto middleware:
const outroMiddlewares = require("./src/middlewares/outroMiddlewares");

//Criando um middleware
function myMiddleware(req, res, next) {
	req.session = { nome: "Leo", sobrenome: "VV" };
	console.log("--------------");
	console.log("PAUssei no seu middleware");
	console.log(
		`Do primeiro middleware, criei um objeto req.session com req.session.nome e req.session.sobrenome: ${req.session.nome} ${req.session.sobrenome}`
	);
	console.log("--------------");
	next(); //Sem ele, a página ficará carregando para sempre e n passará para o prox middleware.
}

//Rotas da home:
route.get("/", homeController.pagInicial);
route.post("/", homeController.postInicial);

// Rotas da contato:
route.get(
	"/contato",
	myMiddleware,
	contaController.pagConta,
	(req, res, next) => {
		console.log("--------------");
		console.log("Ainda fazendo middleware para aprender.. oss");
		console.log(
			`Do penúltimo middleware, olha o que temos na req.session.sobrenome: ${req.session.sobrenome}`
		);
		console.log("--------------");
		next();
	},
	outroMiddlewares
);

// Rotas da form:
route.get("/form", formController.pagForm);
route.post("/form", formController.postForm);

// Rotas da meu:
route.get("/meu", meuController.pagMeu);
route.post("/meu", meuController.postMeu);

//Exportar para ser importado na server:
module.exports = route;
