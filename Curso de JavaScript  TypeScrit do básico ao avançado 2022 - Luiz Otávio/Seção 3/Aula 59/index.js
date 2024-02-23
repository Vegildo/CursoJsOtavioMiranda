const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let i = 0;

//continue -> continua para p´roxima iteração
// break sai do laço

do {
	let n = num[i];
	if (n === 2) {
		console.log("Pulei o número 2");
		i++;
		continue;
	}
	if (n === 5) {
		console.log("Pulei o número 5");
		i++;
		continue;
	}

	if (n === 7) {
		console.log("Parei antes do número 7");
		i++;
		break;
	}
	console.log(n);
	i++;
} while (i < num.length);

// while (i < num.length) {
// 	let n = num[i];
// 	if (n === 2) {
// 		console.log("Pulei o número 2");
// 		i++;
// 		continue;
// 	}
// 	if (n === 5) {
// 		console.log("Pulei o número 5");
// 		i++;
// 		continue;
// 	}

// 	if (n === 7) {
// 		console.log("Parei antes do número 7");
// 		i++;
// 		break;
// 	}
// 	console.log(n);
// 	i++;
// }

//for (let n of num) {
// 	if (n === 2) {
// 		console.log("Pulei o número 2");
// 		continue;
// 	}
// 	if (n === 5) {
// 		console.log("Pulei o número 5");
// 		continue;
// 	}

// 	if (n === 7) {
// 		console.log("Parei no número 7");
// 		break;
// 	}
// 	console.log(n);
// }
