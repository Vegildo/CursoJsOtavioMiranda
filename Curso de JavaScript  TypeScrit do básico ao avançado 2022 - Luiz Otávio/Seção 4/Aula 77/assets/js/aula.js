// Função Construtora -> Contrói Objetos.
// Função Fábrica -> Fabrica Objetos.

// Factory => criaPessoa
// Construtora => new Pessoa  (a convenção é começar com letra maiúscula e a palavra new é obrigatorio ao crirar um novo objeto usando Func Contructor)

//Comeamos a função construtora com letra maiuscula para lembrar q estamos criando uma Func. constr.

function Pessoa(nome, sobrenome) {
    //Atributos ou métodos privados
	const nomeCompleto = nome + " " + sobrenome;

	const metodoInterno = function () {
		console.log(`${nomeCompleto}`);
	};

    //Atributos ou métodos públicos
	this.nome = nome;
	this.sobrenome = sobrenome;

	this.fala = () => {
		metodoInterno();
		console.log(`Eu sou o ${nome} e estou utilizando um método`);
	};
}

const p1 = new Pessoa("Leonardo", "Braga");
const p2 = new Pessoa("Aline", "Lemos");

console.log(p1.nome);
p1.fala();
console.log(p2.nome);
p2.fala();
// Syntax of a constructor function:
// - function keyword
// - name of the constructor function
// - parameters for constructor function
// - body of the constructor function
//function MyConstructorFunc(param) {
// Function constructor body.
// }
