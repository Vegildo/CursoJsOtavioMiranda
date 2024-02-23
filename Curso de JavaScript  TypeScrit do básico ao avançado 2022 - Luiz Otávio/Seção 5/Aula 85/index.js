// Maps => Sempre retorna um novo array, com a mesma quantidade de elementos.

// Para cada elemento:
//Retorne apenas uma string com o nome da pessoa
//Remova apenas a chave "nome" do objeto
//Retorne uma chave id em cada objeto (id)

const pessoas = [
	{ nome: "Leonardo", idade: 33 },
	{ nome: "Aline", idade: 19 },
	{ nome: "Leonardo III", idade: 1 },
	{ nome: "Kayke", idade: 13 },
	{ nome: "Enzo", idade: 8 },
	{ nome: "Ramon", idade: 7 },
	{ nome: "Gabriel", idade: 6 },
];

//Sem mexer no obj original, criaremos um novo
const pessoasId = pessoas.map((obj, indice) => {
	const objNew = { ...obj };
	objNew.id = (indice + 1) * 1001;
	return objNew;
});
console.log(pessoasId);

// Cuidado! pois está mexendo no obj original
// const pessoasId = pessoas.map((obj, indice) => {
// 	obj.id = (indice + 1) * 1001;
// 	return obj;
// });
// console.log(pessoasId);

// const pessoasId = pessoas.map((obj, indice) => ({ id: indice }));
// console.log(pessoasId);

// const pessoasChaveNome = pessoas.map(({ idade }) => ({ idade: idade }));
// console.log(pessoasChaveNome);

// const pessoasChaveNome = pessoas.map(obj => {
// 	delete obj.nome;
// 	return obj;
// });
// console.log(pessoasChaveNome);

// const pessoasString = pessoas.map(({ nome }) => nome);
// console.log(pessoasString);

// Dobre os números
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// const numerosdobrados = numeros.map(valor => valor * 2);
// console.log(numerosdobrados);

// const numerosdobrados = numeros.map((valor, indice, array) => {
// 	return valor * 2;
// });
// console.log(numerosdobrados);

// function callbackFilter(valor) {
// 	return  (valor = valor * 2);
// }

// function callbackFilter(valor, indice, array) {
// 	//console.log(valor, indice, array);
// 	return (valor = valor * 2);
// }

// const numerosdobrados = numeros.map(callbackFilter);
// console.log(numerosdobrados);
