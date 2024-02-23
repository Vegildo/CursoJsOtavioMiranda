const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Olá mundo!");
});

app.get('/contato', (req, res) => {
    res.send("Obrigado por tudo, AGRADECER SEMPRE!");
});

app.get('/form', (req, res) => {
    res.send(`
    <form action="/form" method="POST">
    Nome do cliente: <input type="text" name="nome" value="Leonardo">
    <button>Enviar</button>
    </form>
    `);
});

app.post('/form', (req, res) => {
    res.send('Recebi o formulário');
});

app.listen(3000, () => {
    console.log("Acessar http://localhost:3000");
    console.log("Servidor excutando na porta 3000");
});;