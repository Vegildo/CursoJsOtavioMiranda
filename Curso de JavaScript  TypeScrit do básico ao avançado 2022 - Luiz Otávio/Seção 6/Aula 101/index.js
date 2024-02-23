const pessoas = [
	{ id: 3, nome: "Leo" },
	{ id: 2, nome: "Ramon" },
	{ id: 1, nome: "Gabriel" },
];

const novasPessoas = new Map();

for (const pessoa of pessoas) {
	const { id } = pessoa;
	novasPessoas.set(id, { ...pessoa });
}

// for (const [identifier, { id, nome }] of novasPessoas) {
// 	console.log(identifier, id, nome);
// }




// const novasPessoas = {};

// for (const pessoa of pessoas) {
// 	const { id } = pessoa;
// 	novasPessoas[id] = { ...pessoa };
// }

// for (const { id, nome } of pessoas) {
// 	// console.log(id, nome);
// 	novasPessoas[id] = { id, nome };
// }

console.log(novasPessoas);
