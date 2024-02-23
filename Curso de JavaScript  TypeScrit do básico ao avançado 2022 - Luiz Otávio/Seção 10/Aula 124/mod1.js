class Pessoa {
	constructor(name) {
		this.name = name;
	}
}

const nome = "Leonardo";
const sobrenome = "Braga";

module.exports = {
	nome,
	sobrenome,
	Pessoa,
};

// module.exports.nome = "Leo";
// exports.Pessoa = Pessoa;
// this.sobrenome = "Souza";

// const nome = "Leo";
// const sobrenome = "Braga";

// const nameTalk = () => nome + " " + sobrenome;
// {console.log(`${nome} ${sobrenome}`);}

// exports.sobrenome = sobrenome;
// exports.nome = nome;
// exports.nameTalk = nameTalk;
// this.qualquerCoisa = "qualquerCoisa";

// console.log(module.exports);

// module.exports.sobrenome = sobrenome;
// module.exports.nome = nome;
// module.exports.nameTalk = nameTalk;
// console.log(module);
