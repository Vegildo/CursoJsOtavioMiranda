//COmposição = Mixins

const beber = {
	beber() {
		console.log(`${this.nome} está bebendo.`);
	},
};

const comer = {
	comer() {
		console.log(`${this.nome} está bebendo.`);
	},
};
const falar = {
	falar() {
		console.log(`${this.nome} está bebendo.`);
	},
};

const pessoaProto = { ...falar, ...beber, ...falar };
// const pessoaProto = Object.assign({}, falar, comer, beber);

function criaPessoa(nome, sobrenome) {
	return Object.create(pessoaProto, {
		nome: { value: nome },
		sobrenome: { value: sobrenome },
	});
}
// function criaPessoa(nome, sobrenome) {
// 	const pessoaProto = {
// 		falar() {
// 			console.log(`${this.nome} está falando.`);
// 		},
// 		comer() {
// 			console.log(`${this.nome} está comendo.`);
// 		},
// 		beber() {
// 			console.log(`${this.nome} está bebendo.`);
// 		},
// 	};
// 	return Object.create(pessoaProto, {
// 		nome: { value: nome },
// 		sobrenome: { value: sobrenome },
// 	});
// }

const p1 = criaPessoa("Leo", "Braga");
console.log(p1);

const p2 = criaPessoa("Bruna", "Porto");
console.log(p2);

// function criaPessoa(nome, sobrenome) {
// 	return {
// 		nome,
// 		sobrenome,
// 		falar() {
// 			console.log(`${this.nome} está falando.`);
// 		},
// 		comer() {
// 			console.log(`${this.nome} está comendo.`);
// 		},
// 		beber() {
// 			console.log(`${this.nome} está bebendo.`);
// 		},
// 	};
// }
