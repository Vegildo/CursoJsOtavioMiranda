//freeze uma propriedade do objeto -> object.defineProperty()

//freeze várias propriedades do objeto -> object.defineProperties()

function Produto(nome, preco, estoque) {
	Object.defineProperty(this, "estoque", {
		enumerable: true, //Configura se o key será acessado
		value: estoque, //Configura o valor na key
		writable: false, //Configura se o valor pode ser alterada
		configurable: false, //Configura se a key é reconfigurável (alterada e apagada)
	});

	Object.defineProperties(this, {
		nome: {
			enumerable: true,
			value: nome,
			writable: true,
			configurable: true,
		},
		preco: {
			enumerable: true,
			value: preco,
			writable: true,
			configurable: true,
		},
	});
}

const p1 = new Produto("Camiseta", 20, 3);
console.log(p1);
//console.log(Object.keys(p1));

for (let key in p1) {
	console.log(key);
}
