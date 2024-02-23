module.exports = class Gato {
	constructor(name) {
		this.name = name;
	}

	ronronar() {
		console.log(`${this.name} está fazendo MIAU MIAU..`);
	}
};

// module.exports = 2;

// module.exports = function (x, y) {
// 	return x * y;
// };
