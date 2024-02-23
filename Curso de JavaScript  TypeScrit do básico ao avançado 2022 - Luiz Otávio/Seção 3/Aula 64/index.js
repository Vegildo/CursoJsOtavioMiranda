const retornaHora = (date) => {
	if (date && !(date instanceof Date)) {
		throw new TypeError("Esperando instância de Date.");
	}
	if (!date) {
		date = new Date();
	}

	return date.toLocaleString("pt-BR", {
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit",
		hour12: false,
	});
};
try {
	const data = new Date("11-23-2019 12:10:59");
	const hora = retornaHora();
	console.log(hora);
} catch (e) {
	//Tratar o erro
} finally {
	console.log("Tenha um bom dia!");
}

//retornaHora(new Date()):

// try {
// 	//É executada quando não há erros
// } catch (e) {
// 	//É executada quando há erros
// } finally {
// 	//É executada SEMPRE.
// }
