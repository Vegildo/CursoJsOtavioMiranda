// Filter => Sempre retorna um novo array, com a mesma quantidade de elementos ou menos.

// Para cada elemento:
//Retorne as pessoas que tem o nome com 5 letras ou mais
//Retorne as pessoas com mais de 18 anos
//Retorne as pessoas cuo nome termina com a letra 'o'

const pessoas = [
	{ nome: "Leonardo", idade: 33 },
	{ nome: "Aline", idade: 19 },
	{ nome: "Leonardo III", idade: 1 },
	{ nome: "Kayke", idade: 13 },
	{ nome: "Enzo", idade: 8 },
	{ nome: "Ramon", idade: 7 },
	{ nome: "Gabriel", idade: 6 },
];

const pessoasO = pessoas.filter(({ nome }) => nome.toLowerCase().endsWith("o"));
console.log(pessoasO);

// const pessoas18Anos = pessoas.filter(({ idade }) => idade >= 18);
// console.log(pessoas18Anos);

// const pessoas5Letras = pessoas.filter(({ nome }) => nome.length >= 5);
// console.log(pessoas5Letras);

// Retorne os números maiores que 10
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// const numerosFiltrados = numeros.filter((valor) => valor > 10);
// console.log(numerosFiltrados);

// const numerosFiltrados = numeros.filter((valor, indice, array) => {
// 	console.log(valor, indice, array);
// 	return valor > 10;
// });
// console.log(numerosFiltrados);

// function callbackFilter(valor) {
// 	return valor > 10;
// }

// function callbackFilter(valor, indice, array) {
// 	if (valor > 10) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }

// const numerosFiltrados = numeros.filter(callbackFilter);
// console.log(numerosFiltrados);
