//  Quantificadores:

// * (opcionais). Zero ou varias vezes, 0 ou n. {0,}
// + (obrigatório). Um ou varias vezes, 1 ou n. {1,}
// ? (opcionais). Zero ou uma vez, 0 ou 1. {0,1}
// \ Caractere de escape
// {n,m} n, mínimo de vezes. m, máximo de vezes.

const { txt, files } = require("./base");

// console.log(txt);

// const regExp1 = /Jo+ão+/gi;
// console.log(txt.match(regExp1));

// const regExp2 = /\.\w+/g;
// for (const file of files) {
// 	// console.log(file);
// 	console.log(file.match(regExp2));
// }

// const regExp3 = /\.jpg/gi;
// const regExp4 = /\.(jpg|jpeg)/gi;
// const regExp5 = /\.jpe*g/gi;

// for (const file of files) {
// 	// console.log(file, file.match(regExp3));
// 	console.log(file, file.match(regExp4));
// }

// for (const file of files) {
// 	console.log(file, file.match(regExp5));
// }

// const regExp6 = /\.jpe?g/gi;

// const regExp7 = /\.jpe{0,1}g/gi;

// for (const file of files) {
// 	console.log(file, file.match(regExp6));
// }

// for (const file of files) {
// 	const valid = file.match(regExp6);
// 	if (!valid) continue;
// 	console.log(file, valid);
// }
// console.log("------------");

// for (const file of files) {
// 	const valid = file.match(regExp7);
// 	console.log(file, valid);
// }

const regExp8 = /\.(jp(e)?g)/g;

for (const file of files) {
	const valid = file.match(regExp8);
	console.log(file, valid);
}
