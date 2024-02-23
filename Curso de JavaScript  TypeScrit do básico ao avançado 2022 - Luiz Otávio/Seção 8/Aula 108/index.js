function rand(min, max) {
	min *= 1000;
	max *= 1000;
	return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, time) {
	return new Promise((resolve, reject) => {
		if (typeof msg !== "string") reject("Bad VALUE!"); // reject(new Error("ERRO"));
		setTimeout(() => {
			// console.log(msg);
			resolve(msg);
		}, time);
	});
}

esperaAi("Você vai conseguir LEO! Seu TEMPO CHEGOU", rand(1, 3))
	.then(resp => {
		console.log(resp);
		return esperaAi("Bruna também, ela vai conseguir vencer", rand(1, 3));
	})
	.then(resp => {
		console.log(resp);
		return esperaAi(10, rand(1, 3));
	})
	.then(resp => {
		console.log(resp);
		return esperaAi("Vocês dois serão felizes juntos.", rand(1, 3));
	})
	.then(resp => {
		console.log(resp);
	})
	.catch(e => {
		console.log("ERROR...", e);
	});

// function esperaAi(msg, time, cb) {
// 	setTimeout(() => {
// 		console.log(msg);
// 		if (cb) cb();
// 	}, time);
// }

// esperaAi("Você vai conseguir LEO! Seu TEMPO CHEGOU", rand(1, 3), () => {
// 	esperaAi("Bruna também, ela vai conseguir vencer", rand(1, 3), () => {
// 		esperaAi("Vocês dois serão felizes juntos.", rand(1, 3));
// 	});
// });

// function esperaAi(msg, time) {
// 	setTimeout(() => {
// 		console.log(msg);
// 	}, time);
// }

// esperaAi("Você vai conseguir LEO! Seu TEMPO CHEGOU", rand(1, 3));

// esperaAi("Bruna também, ela vai conseguir vencer", rand(1, 3));

// esperaAi("Vocês dois serão felizes juntos.", rand(1, 3));
