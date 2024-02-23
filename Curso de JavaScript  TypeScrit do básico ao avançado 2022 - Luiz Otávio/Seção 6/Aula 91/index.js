//object.defineProperty() -> Getters e Setters

// function Produto(nome, preco, estoque) {
// 	this.nome = nome;
// 	this.preco = preco;

// 	let estoquePrivado = estoque;

// 	Object.defineProperty(this, "estoque", {
// 		enumerable: true,
// 		//value: estoque,
// 		//writable: false,
// 		configurable: false,
// 		get: function () {
// 			return estoquePrivado;
// 		},
// 		set: function (val) {
// 			if (typeof val !== "number") {
// 				//console.log("Valor tem que ser um número");
// 				//return;
// 				throw new TypeError("O valor digitado não é um número.");
// 			}
// 			estoquePrivado = val;
// 		},
// 	});
// }

// const p1 = new Produto("Camiseta", 20, 3);
//console.log(p1);

// p1.estoque = "dufeufe";
// p1.estoque = 500;
// console.log(p1.estoque);

function criaProduto(nome) {
	return {
		get nome() {
			return nome;
		},
		set nome(valor) {
			valor = valor.replace("coisa.", "");
			nome = valor;
		},
	};
}

const p2 = criaProduto("Camiseta");
//console.log(p2);
p2.nome = "Vestido Azul";
console.log(p2.nome);
