// Factory function (Funçao Fábrica)
function criaPessoa(n, s, p, a) {
	return {
		nome: n,
		sobrenome: s,
		// Getter
		get nomeCompleto() {
			return `%{this.nome} %{this.sobrenome}`;
		},
		// Setter
		set nomeCompleto(valor) {
			valor = valor.split(" ");
			this.nome = valor.shift();
			this.sobrenome = valor.join(" ");
		},
		fala: function (assunto = "Falando sobre Leonardo, seu amor") {
			return `${this.nome}, tem ${this.peso}Kg, e está ${assunto}.`;
		},
		peso: p,
		altura: a,
		// Getter
		get imc() {
			const indiceIMC = this.peso / this.altura ** 2;
			return indiceIMC.toFixed(2);
		},
	};
}

const p1 = criaPessoa("Leo", "Braga", 69, 1.75);
// p1.nomeCompleto = "Stephanie Almeida";
// console.log(p1.nome);
// console.log(p1.sobrenome);
// console.log(p1.fala());
// console.log(p1.fala("falando sobre JS"));
// console.log(p1.imc);
// console.log(p1);
// console.log(p1.nomeCompleto);

const p2 = criaPessoa("Stephanie", "Almeida", 55, 1.67);
// console.log(p2.imc);

const p3 = criaPessoa("Nadia", "Sales", 50, 1.62);
// console.log(p3.imc);
const p4 = criaPessoa("viviane", "Souza", 58, 1.66);
// console.log(p4.imc);
const p5 = criaPessoa("lidiane", "Braga", 60, 1.65);
// console.log(p5.imc);
