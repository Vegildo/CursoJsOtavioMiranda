// IIFE -> Immediately invoked function expression

//gabarito -> envolva a a função anônima em parênteses e depois coloque mais um parêntese, podendo passar nele alguns parametros se a func anonima tive-los

(function (idade, peso, altura) {
	const sobrenome = "Braga";
	function criaNome(nome) {
		return nome + " " + sobrenome;
	}
	function falaNome() {
		console.log(criaNome("Leo"));
	}
	falaNome();
	console.log(idade, peso, altura);
})(33, 69, 1.78);

// (function () {
// 	const nome = "leo";
// 	console.log(nome);
// })();
//const nome = "Ster";
