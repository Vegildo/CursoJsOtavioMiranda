const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const app = express();

const mongoose = require("mongoose");

mongoose
	.connect(process.env.CONNECTIONSTRING)
	.then(() => {
		app.emit("pronto");
	})
	.catch(e => console.log(e));

// Criação da session:
const session = require("express-session");
const MongoStore = require("connect-mongo");
const flashMessage = require("connect-flash");

const routes = require("./routes");
const path = require("path");

const helmet = require("helmet");
// const csrf = require("tiny-csrf");

const {
	globalMiddleware,
	checkCsrfError,
	csrfMiddleware,
} = require("./src/middlewares/globalMiddleware"); //Associação via desestruturação, destructuring assignment.

app.use(helmet());
app.use(express.urlencoded({ extended: true })); //Usado pra habilitar o tratamento do body das requisições
app.use(express.json());
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
app.use(flashMessage());

app.set("views", path.resolve(__dirname, "src", "views")); // forma absoluta - utilizando path e __dirname
app.set("view engine", "ejs"); //engine pug, ejs, jade e etcs

// helmet.contentSecurityPolicy({
// 	useDefaults: true,
// 	directives: {
// 	  "font-src": ["'self'", "external-website.com"],
// 	  // permitindo estilos de qualquer site
// 	  "style-src": null,
// 	},
//   })

//Seguranca

// app.use(csrf("123456789iamasecret987654321look"));

// My own Global Middlewares:

app.use(globalMiddleware);
// app.use(checkCsrfError);
// app.use(csrfMiddleware);

// A ordem nesse caso importa o middlewars q vc botar na frente será rodado primeiro. E tds tem q estar depois do uso do express.urlencoded e antes do uso do routes.

app.use(routes);

app.on("pronto", () => {
	app.listen(3000, () => {
		console.log("Acessar http://localhost:3000");
		console.log("Servidor excutando na porta 3000");
	});
});
