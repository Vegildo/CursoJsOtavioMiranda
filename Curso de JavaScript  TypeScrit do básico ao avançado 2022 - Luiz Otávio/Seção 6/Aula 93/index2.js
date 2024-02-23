/*
	O JS é baseado em protótipos para passar propriedades e métodos de um objeto para outro.
	
	Protótipo é o termo usado para se referir ao que foi criado pla primeira vez, servindo de modelo ou molde para futuras produções. 
	
	Todos os objetos tem uma referência interna para um protótipo (__proto__) que vem da propriedade prototype da função construtora que foi usada para criá-lo. quando tentamos acessar um membro de um objeto e depois a cadeia de protótipos é usada até o topo (null) até encontrar (ou não) tal membro.
*/

function Pessoa(nome, sobrenome) {
	this.nome = nome;
	this.sobrenome = sobrenome;
	this.nomeCompleto = () => "ORIGINAL:" + this.nome + " " + this.sobrenome;
}

//console.log(Pessoa.prototype === pessoa1.__proto__); -> TRUE

//Pessoa.prototype.estouAqui = "hahahahahah";
Pessoa.prototype.nomeCompleto = function () {
	return this.nome + " " + this.sobrenome;
};

const pessoa1 = new Pessoa("Leonardo", "B.");
const pessoa2 = new Pessoa("Bruna", "P.");

// Cadeia de herança dos protos - pessoa1
// pessoa1 -> Pessoa.prototype -> Object.prototype

const data = new Date();

console.dir(pessoa1);
console.dir(data);

// Cadeia de herança dos protos - data
// data -> Date.prototype -> Object.prototype
