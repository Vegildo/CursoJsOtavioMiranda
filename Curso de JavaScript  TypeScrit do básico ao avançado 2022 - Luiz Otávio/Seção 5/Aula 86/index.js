// Reduce => retorna um elemento

//Retorne a pessoa mais velha

const pessoas = [
	{ nome: "Leonardo", idade: 33 },
	{ nome: "Aline", idade: 19 },
	{ nome: "Leonardo III", idade: 1 },
	{ nome: "Kayke", idade: 13 },
	{ nome: "Enzo", idade: 8 },
	{ nome: "Ramon", idade: 7 },
	{ nome: "Gabriel", idade: 6 },
];

const maisVelha = pessoas.reduce((acumulador, valor) =>
	acumulador.idade > valor.idade ? acumulador : valor
);

// const maisVelha = pessoas.reduce((acumulador, valor) => {
// 	if (acumulador.idade > valor.idade) return acumulador;
// 	return valor;
// });

console.log(maisVelha);
//const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

//Retorne um array com o dobro dos valores (map)
//Não FAÇA com reduce, use map
// const dobro = numeros.reduce((acumulador, valor) => {
// 	acumulador.push(valor * 2);
// 	return acumulador;
// }, []);

// console.log(dobro);

//Retorne um array com os pares (Filter)
//Não FAÇA com reduce, use filter
// const dobro = numeros.reduce((acumulador, valor) => {
// 	if (valor % 2 === 0) acumulador.push(valor);
// 	return acumulador;
// }, []);

// console.log(dobro);

// Some todos os números do array

// const total = numeros.reduce(function (acumulador, valor, indice, array) {
// 	acumulador += valor;
// 	//console.log(acumulador, valor);
// 	return acumulador;
// }, 0); //valor inicial

// console.log(total);
