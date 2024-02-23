class Pessoa {
	constructor(nome, sobrenome) {
		this.nome = nome;
		this.sobrenome = sobrenome;
	}

	falar() {
		console.log(`${this.nome} está falando`);
	}

	comer() {
		console.log(`${this.nome} está comendo`);
	}

	beber() {
		console.log(`${this.nome} está bebendo`);
	}
}

const p1 = new Pessoa("Leonardo", "Braga");
const p2 = new Pessoa("Bruna", "Porto");
const p3 = new Pessoa("Ramon", "Braga");
const p4 = new Pessoa("Gabriel", "Braga");

function Pessoa2(nome, sobrenome) {
	this.nome = nome;
	this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function () {
	console.log(`${this.nome} está falando`);
};

const p = new Pessoa2("Kayke", "Braga");
