// require("dotenv").config();
const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const app = express();

const mongoose = require("mongoose");

// const connectionString ="mongodb+srv://leo:1210@leovv.insh30a.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(process.env.CONNECTIONSTRING,
	{
		useNewUrlParser: true,		
		useUnifiedTopology: true,
	})
	.then(() => {		
		app.emit("pronto");
	})
	.catch(e => console.log(e));

// Criação da session:
const session = require("express-session");
const MongoStore = require("connect-mongo");
const flash = require("connect-flash");

const routes = require("./routes");
const path = require("path");

const helmet = require("helmet");
// const csrf = require("tiny-csrf"); csyrf foi depreciado e n consegui usar um semelhante 

// const globalMiddleware = require("./src/middlewares/globalMiddleware");
const {	middlewareGlobal, checkCsrfError, anotherMiddleware } = require("./src/middlewares/globalMiddleware"); //Associação via desestruturação, destructuring assignment.

app.use(helmet());
app.use(express.urlencoded({ extended: true })); //Usado pra habilitar o tratamento do body das requisições
app.use(express.json())

app.use(express.static(path.resolve(__dirname, "public")));

//Configurando a session
const sessionConfig = session({
	secret: "cat VV",
	store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
	resave: false,
	saveUninitialized: false,
	cookie: {
		//milisegundo*min*hora*dia*Qtd de dias
		maxAge: 1000 * 60 * 60 * 24 * 7, //7 dias
		secure: true,
		httpOnly: true,
	},
});

app.use(sessionConfig);
app.use(flash());

app.set("views", path.resolve(__dirname, "src", "views")); 
app.set("view engine", "ejs"); 


// My own Global Middlewares:

app.use(middlewareGlobal);
app.use(checkCsrfError);
// app.use(anotherMiddleware);

// A ordem nesse caso importa o middlewars q vc botar na frente será rodado primeiro. E tds tem q estar depois do uso do express.urlencoded e antes do uso do routes.

app.use(routes);

app.on("pronto", () => {
	app.listen(3000, () => {
		console.log("Acessar http://localhost:3000");
		console.log("Servidor excutando na porta 3000");
	});
});
