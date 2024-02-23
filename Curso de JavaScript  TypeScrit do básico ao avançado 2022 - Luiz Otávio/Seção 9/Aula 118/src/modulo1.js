const nome = "Leonardo";
const sobrenome = "Braga";
const idade = 33;
const cpf = "549.991.407-99";

function soma(a, b) {
	return a + b;
}

export default (a, b) => a * b;

// export default function soma(a, b) {
// 	return a + b;
// }
export { nome, sobrenome, idade, soma };
// export { nome as default, sobrenome, idade, soma };

//export const nome = "Leonardo";
//export const sobrenome = "Braga";
//export const idade = 33;
//export const cpf = "549.991.407-99";

// function soma(a, b) {
// 	return a + b;
// }

// export default class Pessoa {
// 	constructor(nome, sobrenome) {
// 		this.nome = nome;
// 		this.sobrenome = sobrenome;
// 	}
// }

// export { nome as nomeMeu, sobrenome as qualquerNome, idade, soma };

// export { nome, sobrenome, idade, soma };
