const soma = (x, y) => {
	if (typeof x !== "number" || typeof y !== "number") {
		//throw new Error("x e y PRECISAM ser NÚMEROS.");
		throw new TypeError("x e y PRECISAM ser NÚMEROS.");
	}
	return x + y;
};

try {
	console.log(soma(2, 3));
	console.log(soma(2, "leo"));
} catch (error) {
	console.log(error);
	console.log("Alguma coisa mais amigável para o usuário.");
}

// try {
// 	console.log(varInexistente);
// } catch (e) {
// 	console.log(`varInexistente não existe!`);
// 	//console.log(e); // NAO RECOMENDADO
// }
