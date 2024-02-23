// Resumo

//Factory functions / Constructor functions / Classes
//Constructor
function Pessoa(nome, sobrenome) {
	this.nome = nome;
	this.sobrenome = sobrenome;

	//Object.freeze(this); // Com isso n poderemos mais altarer os valores dps do obj criado. 

	//implicitamente:
	//return this;}
}
//{} <- this -> this
const p1 = new Pessoa("Leo", "Braga");
p1.nome = "Leonardo"; // Estou mudando o valor na referencia de memoria, p1, mas n a referencia de memoria em si.
//p1 = "Leonardo" //Essa forma estou tentando altera a referencia de memoria, logo é proibido e gerará erro.
// console.log(p1);

const p2 = new Pessoa("Aline", "Braga");
// console.log(p2);

//Factory
// function criaPessoa(nome, sobrenome) {
// 	return {
// 		nome,
// 		sobrenome,
// 		get nomeCompleto() {
// 			return `${this.nome} ${this.sobrenome}`;
// 		},
// 	};
// }

// const p1 = criaPessoa("Leo", "braga");
// console.log(p1.nomeCompleto);

//--------------------------------------------------------
//Construtor
// const pessoa2 = new Object();
// pessoa2.nome = "Leonardo";
// pessoa2.sobrenome = "Braga";
// pessoa2.idade = 29;
// pessoa2.speakYourName = function () {
// 	console.log(`${this.nome} ${this.sobrenome} é seu nome! `);
// };
// pessoa2.getDateBirth = function () {
// 	const atualDate = new Date();
// 	return atualDate.getFullYear() - this.idade;
// };

// pessoa2.speakYourName();
// console.log(pessoa2.getDateBirth());

// for (let chave in pessoa2) {
// 	console.log(pessoa2[chave]);
// }

// delete pessoa2.nome;
// console.log(pessoa1);

// console.log(pessoa2["sobrenome"]);
// console.log(pessoa2.sobrenome);
//--------------------------------------------------------
//Literal
// const pessoa1 = {
// 	nome: "Leonardo",
// 	sobrenome: "Braga",
// };

// const chave = "nome";
// console.log(pessoa1[chave]);

// console.log(pessoa1["nome"]);
// console.log(pessoa1.nome);
