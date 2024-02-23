const people = {
	nome: "Luiz",
	sobrenome: "Miranda",
	idade: 40,
	endereço: {
		rua: "Av. Brasil",
		numero: 450,
	},
};

// Atribuição via destruturação

const { nome, ...rest } = people;
console.log(rest);

// const {
// 	endereço: { rua: r = "Rua Alcides Lima", numero },
// 	endereço,
// } = people;
// console.log(endereço, r, numero);

// const { nome: n = "", sobrenome, idade, endereço } = people;
// console.log(endereço);
// console.log(n, sobrenome);

// const nome = people.nome;
// console.log(nome);
//console.log(people.nome);
