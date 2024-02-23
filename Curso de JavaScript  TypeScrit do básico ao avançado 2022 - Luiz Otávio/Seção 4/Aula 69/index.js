const conta = (...args) => {
	console.log(args);
};

conta("+", 200, 20, 30, 40, 50);

// const conta = function (operador, acumulador, ...numeros) {
// 	console.log(arguments);
// };

// conta("+", 200, 20, 30, 40, 50);

// const conta = function (operador, acumulador, ...numeros) {
// 	for (let n of numeros) {
// 		//console.log(n);
// 		if (operador === "+") {
// 			acumulador += n;
// 		}
// 		if (operador === "-") {
// 			acumulador -= n;
// 		}
// 		if (operador === "*") {
// 			acumulador *= n;
// 		}
// 		if (operador === "/") {
// 			acumulador /= n;
// 		}
// 	}
// 	console.log(acumulador);
// };

// conta("+", 200, 20, 30, 40, 50);
// conta("-", 200, 20, 30, 40, 50);
// conta("*", 1, 20, 30, 40, 50);
// conta("/", 1, 20, 30, 40, 50);

// function conta(operador, acumulador, ...numeros) {
// 	console.log(operador, acumulador, numeros);
// }

// conta("+", 0, 20, 30, 40, 50);

// function conta(operador, acumulador, numeros) {
// 	console.log(operador, acumulador, numeros);

// }

// conta("+", 0, [20, 30, 40, 50]);
