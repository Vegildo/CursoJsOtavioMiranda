function rand(min = 0, max = 3) {
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

async function executa() {
	try {
		const fase1 = await esperaAi("Fase 1", rand());
		console.log(fase1);

		const fase2 = await esperaAi("Fase 2", rand());
		console.log(fase2);

		const fase3 = await esperaAi("Fase 3", rand());
		console.log(fase3);

		console.log("Terminamos na fase: ", fase3);
	} catch (e) {
		console.log(e);
	}
}

// executa();

const teste2 = esperaAi("Que a bruna ganhe mais sabedoria e paciencia", 5000);
console.log(teste2);

// esperaAi("Fase 1", rand(0, 3))
// 	.then(val => {
// 		console.log(val);
// 		return esperaAi("Fase 2", rand());
// 	})
// 	.then(val => {
// 		console.log(val);
// 		return esperaAi("Fase 3", rand());
// 	})
// 	.then(fase => {
// 		console.log(fase);
// 		return fase;
// 	})
// 	.then(fase => console.log("Terminamos na fase: ", fase))
// 	.catch(e => console.log(e));
