function rand(min, max) {
	min *= 1000;
	max *= 1000;
	return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, time) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (typeof msg !== "string") {
				reject("Bad VALUE!"); // reject(new Error("ERRO"));
				return;
			}
			// console.log(msg);
			resolve(msg.toUpperCase() + " - Passei na promise");
			return;
		}, time);
	});
}

const promises = [
	// "Primeiro valor",
	esperaAi("Promise 1", rand(1, 5)),
	esperaAi("Promise 2", rand(1, 5)),
	esperaAi("Promise 3", rand(1, 5)),
	esperaAi(1000, rand(1, 5)),
	// "Outro valor",
];

function baixaPagina() {
	const emCache = true;
	const timeSec = 3000;

	if (emCache) {
		return Promise.resolve("Página em cache");
	} else {
		return esperaAi("Página baixada", timeSec);
	}
}

baixaPagina()
	.then(dadosPag => {
		console.log(dadosPag);
	})
	.catch(e => console.log("ERROR", e));

// Promise.race(promises)
// 	.then(function (val) {
// 		console.log(val);
// 	})
// 	.catch(function (err) {
// 		console.log(err);
// 	});

// Promise.all(promises)
// 	.then(function (val) {
// 		console.log(val);
// 	})
// 	.catch(function (err) {
// 		console.log(err);
// 	});
