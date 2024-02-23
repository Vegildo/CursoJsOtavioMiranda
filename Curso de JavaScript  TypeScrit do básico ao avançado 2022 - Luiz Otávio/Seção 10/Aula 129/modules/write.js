const fs = require("fs").promises;
// const path = require("path");
// const filePath = path.resolve(__dirname, "..", "teste.json");

// fs.writeFile(filePath, peopleJSON, { flag: "w", encoding: "utf8" });

// const filePathTeste = path.resolve(__dirname, "..", "teste.txt");

// fs.writeFile(
// 	filePathTeste,
// 	"O que eu quiser escrever, são os dados que serão escritos. Teste 2 \n",
// 	{ flag: "a", encoding: "utf8" }
// );

// const people = [
// 	{ nome: "Leonardo" },
// 	{ nome: "Kayke" },
// 	{ nome: "Enzo" },
// 	{ nome: "Ramon" },
// 	{ nome: "Gabriel" },
// ];

// const peopleJSON = JSON.stringify(people, "", 1);

module.exports = (way, data) => {
	fs.writeFile(way, data, { flag: "w", encoding: "utf8" });
};
