const path = require("path");
const filePath = path.resolve(__dirname, "teste.json");
const write = require("./modules/write");
const read = require("./modules/read");

// const people = [
// 	{ nome: "Leonardo" },
// 	{ nome: "Kayke" },
// 	{ nome: "Enzo" },
// 	{ nome: "Ramon" },
// 	{ nome: "Gabriel" },
// ];

// const peopleJSON = JSON.stringify(people, "", 1);

// write(filePath, peopleJSON);

async function readFile(way) {
	const readAwait = await read(way);
	// console.log(readAwait);
	// return readAwait;
	renderData(readAwait);
}

function renderData(dat) {
	// console.log(dat);
	dat = JSON.parse(dat);
	// console.log(dat);
	dat.forEach(el => console.log(el.nome));
}

readFile(filePath);

// const dataFile = readFile(filePath).then(dat => console.log(dat)); // Usando o then a gnt retira os dados de dentro da promessa.

// console.log(dataFile); // => nos retornará uma promessa, pois a função é assíncrona
