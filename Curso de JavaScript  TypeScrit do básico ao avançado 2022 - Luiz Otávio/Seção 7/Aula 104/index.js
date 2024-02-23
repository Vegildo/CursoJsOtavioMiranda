class DispositivoEletronico {
	constructor(nome) {
		this.nome = nome;
		this.ligado = false;
	}

	ligar() {
		if (this.ligado) {
			console.log(this.nome + " já está ligado");
			return;
		}

		this.ligado = true;
	}

	desligar() {
		if (!this.ligado) {
			console.log(this.nome + " já está desligado");
			return;
		}

		this.ligado = false;
	}
}

class Smartphone extends DispositivoEletronico {
	constructor(nome, cor, modelo) {
		super(nome); //Passando os parametros da classe pai

		this.cor = cor;
		this.modelo = modelo;
	}
}

class Tablet extends DispositivoEletronico {
	constructor(nome, temWIFI) {
		super(nome); //Passando os parametros da classe pai

		this.temWIFI = temWIFI;
	}

	ligar() {
		console.log("Alteramos o método ligar");
	}

	falaOI() {
		console.log("Falar.. Oi!");
	}
}

const s1 = new Smartphone("Iphone", "branco", "6S");
const t1 = new Tablet("Ipad", true);
// s1.ligar();
// s1.ligar();
// s1.desligar();
console.log(s1);
console.log(t1.ligado);
t1.ligar();
t1.falaOI();

// const d1 = new DispositivoEletronico("Smartphone");
// d1.ligar();
// d1.ligar();
// d1.desligar();
// console.log(d1);
