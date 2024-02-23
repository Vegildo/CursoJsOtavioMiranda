//Usando arrow func
const max2 = (x, y) => (x > y ? x : y);
console.log(max2(10, 2));

//Refatorando mais uma vez
// function max(x, y) {
// 	return x > y ? x : y;
// }
// console.log(max(10, 2));

//Refatorando
// function max(x, y) {
// 	if (x > y) return x;
// 	return y;
// }
// console.log(max(10, 2));

//Primeira funcao criada
// function max(x, y) {
// 	if (x > y) {
// 		return x;
// 	} else {
// 		return y;
// 	}
// }
// console.log(max(10, 2));
