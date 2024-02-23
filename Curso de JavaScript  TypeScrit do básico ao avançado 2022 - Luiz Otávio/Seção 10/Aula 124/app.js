const path = require("path");
const axios = require("axios");
const mod1 = require("./mod1");

console.log(mod1);

const { Pessoa } = require("./mod1");

const p2 = new Pessoa("Renata");
console.log(p2);
// console.log(Pessoa);

// axios("https://www.otaviomiranda.com.br/files/json/pessoas.json")
// 	.then(response => console.log(response.data))
// 	.catch(e => console.log(e));

// const p1 = new Pessoa("Bruna");
// console.log(p1);

// ----------------Destructuring
// const { nome, sobrenome, nameTalk } = require("./mod1");
// console.log(nome + " " + sobrenome);
// console.log(nome, sobrenome);
// console.log(nameTalk());

// const nameTalk = require("./mod1.js");
// console.log(nameTalk);

// const mod1 = require("./mod1.js");
// const nameTalk = mod1.nameTalk;

// console.log(mod1);
// console.log(mod1.nameTalk());
