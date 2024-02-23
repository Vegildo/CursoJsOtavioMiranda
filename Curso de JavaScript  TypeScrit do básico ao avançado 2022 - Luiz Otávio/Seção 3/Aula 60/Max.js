//Escreva uma função que recebe 2 npumeros e retorne o maior deles.

//refatorando
const max = (n1, n2) =>
	n1 > n2 ? n1 : n2 > n1 ? n2 : "Voce escolheu 2 números iguais";

//primeira funçao
// const max = (n1, n2) => {
// 	if (n1 > n2) {
// 		return n1;
// 	} else if (n2 > n1) {
// 		return n2;
// 	} else {
// 		return "Voce escolheu 2 números iguais";
// 	}
// };

// const getMaiorNumero = (num1, num2) => {
// 	return Math.max(num1, num2);
// };

const n1 = 30;
const n2 = 60;
const maior = max(n1, n2);
const txt = `${maior} é o número maior entre ${n1} e ${n2}`;
console.log(txt);
