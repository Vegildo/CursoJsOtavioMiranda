// require("dotenv").config();
const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const app = express();

const mongoose = require("mongoose");

// const connectionString ="mongodb+srv://leo:1210@leovv.insh30a.mongodb.net/?retryWrites=true&w=majority";

mongoose
	.connect(
		process.env.CONNECTIONSTRING /*connectionString,
		{ useNewUrlParser: true },
		{ useUnifiedTopology: true }*/
	)
	.then(() => /*console.log("Agora que a conexão ocorreu"));*/ {
		// console.log("Conectei à base de dados..");
		app.emit("pronto");
	})
	.catch(e => console.log(e));

const routes = require("./routes");
const path = require("path");

const {
	globalMiddleware,
	anotherMiddleware,
} = require("./src/middlewares/globalMiddleware"); //Associação via desestruturação, destructuring assignment.
const { deflateSync } = require("zlib");

// const globalMiddleware = require("./src/middlewares/globalMiddleware");

app.use(express.urlencoded({ extended: true })); //Usado pra habilitar o tratamento do body das requisições

// app.use(express.static("./public"));
app.use(express.static(path.resolve(__dirname, "public")));

// app.set("views", "./src/views"); //forma relativa -  usando o caminho inteiro
app.set("views", path.resolve(__dirname, "src", "views")); // forma absoluta - utilizando path e __dirname
app.set("view engine", "ejs"); //engine pug, ejs, jade e etcs

// My own Global Middlewares:
app.use(anotherMiddleware);
app.use(globalMiddleware);
// A ordem nesse caso importa o middlewars q vc botar na frente será rodado primeiro. E tds tem q estar depois do uso do express.urlencoded e antes do uso do routes.

app.use(routes);

app.on("pronto", () => {
	app.listen(3000, () => {
		console.log("Acessar http://localhost:3000");
		console.log("Servidor excutando na porta 3000");
	});
});
