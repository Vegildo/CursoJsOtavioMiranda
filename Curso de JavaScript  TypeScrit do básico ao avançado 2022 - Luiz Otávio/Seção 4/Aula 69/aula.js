// A função definida com a palavra function tem uma variável especial que chama arguments.
// E a mesma sustenta todos os argumentos enviados.

function funcao([valor1, valor2, valor3]) {
	console.log(valor1, valor2, valor3);
}
let arr = ["leo", "braga", 19];
funcao(arr);

// function funcao({ nome, sobrenome, idade }) {
// 	console.log(nome, sobrenome, idade);
// }
// let obj = { nome: "leo", sobrenome: "braga", idade: 19 };
// funcao(obj);

// function funcao(a = 0, b = 2, c = 4) {
// 	console.log(a + b);
// }
// funcao(2, undefined, 10);

// function funcao(a, b) {
// 	b = b || 0; //a variável b sera b quando tiver sido enviado um valor quando nao ela srá 0.
// 	console.log(a + b);
// }
// funcao(2);

// function funcao(a, b, c) {
// 	let total = 0;
// 	for (let argumento of arguments) {
// 		total += argumento;
// 	}

// 	console.log(total, a, b, c);
// }

// funcao(1, 2, 3, 4, 5, 6, 7);

// function funcao() {
// 	console.log(arguments);
// 	console.log(arguments[10]);
// }

// funcao("Valor", 1, 2, 3, 4, 5, 6, 7, 8, 9, "décimo");
