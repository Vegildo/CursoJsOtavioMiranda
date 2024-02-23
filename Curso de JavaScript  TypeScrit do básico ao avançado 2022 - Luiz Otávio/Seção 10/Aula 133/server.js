const express = require("express");
const app = express();
const routes = require("./routes");

app.use(express.urlencoded({ extended: true })); //Usado pra habilitar o tratamento do body das requisições
app.use(routes);

app.listen(3000, () => {
	console.log("Acessar http://localhost:3000");
	console.log("Servidor excutando na porta 3000");
});
