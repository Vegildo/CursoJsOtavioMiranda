// Retorne a soma do dobro de todos os pares

// 3 passos:
// -> Filtrar pares => Filter
// -> Dobrar os valores => Map
// -> Reduzir (somar tudo) => Reduce

const nums = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const num = nums
	.filter(val => val % 2 === 0)
	.map(valor => valor * 2)
	.reduce((ac, vl) => ac + vl);

console.log(num);

/*  const pessoas = [
	{ nome: "Leonardo", idade: 33 },
	{ nome: "Aline", idade: 19 },
	{ nome: "Leonardo III", idade: 1 },
	{ nome: "Kayke", idade: 13 },
	{ nome: "Enzo", idade: 8 },
	{ nome: "Ramon", idade: 7 },
	{ nome: "Gabriel", idade: 6 },
];*/
