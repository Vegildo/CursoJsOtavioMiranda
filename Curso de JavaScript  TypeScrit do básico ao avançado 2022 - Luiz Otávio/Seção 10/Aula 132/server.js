/* Tipos de requisição
1 - Parametros de url
/profiles/12345?campanha=googleads&nome_campanha=seila

/profiles/12345 ?
campanha=googleads &
nome_campanha=seila

2 - Corpo da requisição porem nao vai pra url 

Abra inspeção
Abre a aba network
clique no site
la embaixo no headers tem Form Data
Clique em view parsed


*/

/* Params
nome do JSON é params, que é parametro
/:<nome da chave> ? 
A interrogação deixa o nome da chave opcional
*/

/* req/res
req => objeto de solicitação
res => objeto de resposta
*/

/* middleware
https://expressjs.com/pt-br/guide/using-middleware.html
*/

const express = require('express');
const app = express();

/* app.use(express.urlencoded({extended: true}))
A opção "extended" diz para o express qual biblioteca ele deve utilizar para fazer o parsing do conteúdo das requisições que ele recebe.
Quando extended : true vai utilizar a biblioteca qs e quando for false ele vai utilizar a biblioteca querystring.

A diferença entre elas é que a biblioteca qs permite o aninhamento de objetos (nested objects), que é praticamente como o JSON trabalha:

// {"animal":{"tipo":"cachorro","raca":"vira-lata","idade":3}}
E a biblioteca querystring não suporta nested objects.

Fonte: https://github.com/expressjs/body-parser#bodyparserurlencodedoptions
*/

// app.use(
//     express.urlencoded(
//         { 
//             extended: true
//         }
//     )
// );
app.use(express.urlencoded({extended: true})); //Usado pra habilitar o tratamento do body das requisições


app.get('/', (req, res) => {
    res.send("Olá mundo!");
});

app.get('/contato', (req, res) => {
    res.send("Obrigado por tudo, AGRADECER SEMPRE!");
});

app.get('/form', (req, res) => {
    res.send(`
    <form action="/form" method="POST">
    Nome do cliente: <input type="text" name="nameKey" value="Exemplo de nome">
    Outro Campo: <input type="text" name="outrachave" value="Exemplo de nome">
    <button>Enviar</button>
    </form>
    `);
});

app.post('/form', (req, res) => {
    console.log(req.body);
    // res.send('Recebi o formulário GARAYY');
    res.send(`O que me enviou foi: ${req.body.nameKey}`)
});

app.get('/testes/:idUser?/:parametro?', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    // res.send(`I-Oieee ... ${req.params.idUser}`)
    // res.send(req.params);
    res.send(req.query.nome + ' ' + req.query.sobrenome);
    
})

app.listen(3000, () => {
    console.log("Acessar http://localhost:3000");
    console.log("Servidor excutando na porta 3000");
});;
/* Params x Query

req.params são as partes da rota da url
ex: ../profiles/1 ou ../profiles/2 

req.query vem de query string, ou seja, u, conjundo de chave/valor
ex: ../profiles/?chave1=valor1 ou ../profiles/?chave1=valor1&chave2=valor2 
ou ../profiles/?chave1=valor1&chave2=valor2&chave3=valor3...
*/
