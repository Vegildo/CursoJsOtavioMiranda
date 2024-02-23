// const createPerson = (nome, sobrenome, idade) => {
// 	return {
// 		nome,
// 		sobrenome,
// 		idade,
// 	};
// };

// const pessoa1 = createPerson("Leonardo", "Braga", 32);
// console.log(pessoa1.nome);

const createPerson = (nome, sobrenome, idade) => {
	return {
		nome,
		sobrenome,
		idade,
		fala() {
			console.log("Olá mundo!");
			console.log(
				`${this.nome} ${this.sobrenome} tem ${this.idade} anos de idade.`
			);
		},
		incrementAge() {
			this.idade++;
		},
	};
};

//Nesete caso o this equivale ao funcçao q cria o objeto

const pessoa1 = createPerson("Leonardo", "Braga", 32);
console.log(pessoa1.nome);
pessoa1.fala();

pessoa1.incrementAge();

pessoa1.fala();
