const express = require("express");
const app = express();

// SIGNIFICADO    =>   CRIAR    LER   ATUALIZAR  APAGAR
//     CRUD     =>     Create   Read   Update    Delete
// CRUD no express =>   POST    GET     PUT      DELETE

// http://meusite.com/ <- GET -> Entregue a página root, raiz do site.
//http://meusite.com/contatos <- GET -> Entregue a página contatos do site

app.get("/", (request, response) => {
	response.send("<strong> Hello world! Olá mundo! </strong>");
});

app.get("/contato", (request, response) => {
	response.send("Quero seu contato bb!");
});

app.get("/formulario", (request, response) => {
	response.send(`
    <form action="/formulario" method="POST">
        Nome: <input type="text" name="nome" value="Leonardo">
        <button>Enviar</button>
    </form>
    `);
});

app.post("/formulario", (request, response) => {
	response.send(`Recebi o formulário...`);
});

app.listen(3000, () => {
	console.log("Acessar http://localhost:3000");
	console.log("Servidor excutando na porta 3000");
});
