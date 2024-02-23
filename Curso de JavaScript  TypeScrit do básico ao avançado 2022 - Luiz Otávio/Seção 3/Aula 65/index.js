const mostraHora = () => {
	let data = new Date();

	return data.toLocaleDateString("pt-BR", {
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit",
		hour12: false,
	});
};

// const funcDoInterval = () => {
// 	console.log(mostraHora());
// };

const timer = setInterval(() => {
	console.log(mostraHora());
}, 1000);

setTimeout(() => {
	clearInterval(timer);
}, 3000);

setTimeout(() => {
	console.log("HELLO WORLD!");
}, 3000);
