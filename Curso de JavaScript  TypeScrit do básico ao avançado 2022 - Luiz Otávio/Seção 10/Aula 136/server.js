const express = require("express");
const app = express();
const routes = require("./routes");
const path = require("path");

app.use(express.urlencoded({ extended: true })); //Usado pra habilitar o tratamento do body das requisições

// app.use(express.static("./public"));
app.use(express.static(path.resolve(__dirname, "public")));

// app.set("views", "./src/views"); //forma relativa -  usando o caminho inteiro
app.set("views", path.resolve(__dirname, "src", "views")); // forma absoluta - utilizando path e __dirname
app.set("view engine", "ejs"); //engine pug, ejs, jade e etcs

app.use(routes);

app.listen(3000, () => {
	console.log("Acessar http://localhost:3000");
	console.log("Servidor excutando na porta 3000");
});
