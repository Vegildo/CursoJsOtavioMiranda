// return
// Retorna um valor
// Termina a função

//------------------------------------------------------

const criaMulti = (multi) => {
	//multi = multiplicador
	return (n) => {
		return n * multi;
	};
};

//Funções fechamento, closed, pois elas estão fechando o escopo mesmo depois dele já ter sido usado.

duplica = criaMulti(2);
triplica = criaMulti(3);
quadriplica = criaMulti(4);

// const duplica = (n) => {
// 	return n * 2;
// };
// const triplica = (n) => {
// 	return n * 3;
// };

// const quadriplica = (n) => {
// 	return n * 4;
// };

console.log(duplica(2), triplica(2), quadriplica(2));

//------------------------------------------------------

// function falaFrase(comeco) {
// 	function falaResto(resto) {
// 		return comeco + " " + resto; //retorna comeco + espaco+ resto
// 	}
// 	return falaResto;
// 	//retorna a saida da funcao falaResto sem executá-la, ou seja, retorna a função em si.
// }
// const fala = falaFrase("olá");
// const resto = fala("mundo!");
// console.log(resto);

// const olaMundo = falaFrase("olá");
// console.log(olaMundo);
// console.log(olaMundo("mundo!"));

//------------------------------------------------------

// function criaPessoa(nome, sobrenome) {
// 	return { nome, sobrenome };
// }

// const p1 = criaPessoa("Leo", "braga");
// const p2 = {
// 	nome: "Renato",
// 	sobrenome: "Ferreira",
// };

// console.log(typeof p1);
// console.log(typeof p2);

//------------------------------------------------------

//Funçao q nao tem return, mas é util no dom por ex.

// document.addEventListener(click, () => {
// 	document.body.style.backgroundColor = "red";
// });

// const soma = (a, b) => {
// 	return a + b;
// };

// const soma2 = (a, b) => {
// 	console.log(a + b);
// };
