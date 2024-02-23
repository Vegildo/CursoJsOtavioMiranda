function teste() {
	console.log("Este é meu teste.");
	console.log(this);
}

class ControleRemoto {
	constructor(tv) {
		this.tv = tv;
		this.volume = 0;
		teste();
	}

	//Método de instância
	aumentarVolume() {
		this.volume += 2;
	}

	diminuirVolume() {
		this.volume -= 2;
	}

	//Método estático
	static trocaPilha() {
		console.log("Ok. Vou trocar!");
		//console.log(this.volume); // Não temos acesso aos parametros da instância
		// Pois coomo n usamos a palavra new, o contrutor n é chamado e seus parametros por consequencia tb não, les sao referentes a instancia q foi criada
	}

	static soma(x, y) {
		console.log(this);
		return x + y;
	}
}

const c1 = new ControleRemoto("LG");

// c1.aumentarVolume();
// c1.aumentarVolume();
// c1.aumentarVolume();
// console.log(c1);

// ControleRemoto.trocaPilha();

ControleRemoto.soma();
// console.log(ControleRemoto.soma(2, 4));

//random() é um método estático.
//console.log(Math.random());
