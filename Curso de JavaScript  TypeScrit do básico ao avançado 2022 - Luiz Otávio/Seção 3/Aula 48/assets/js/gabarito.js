const h1 = document.querySelector(".container h1");
const data = new Date();
// h1.innerHTML = data.toLocaleString("pt-br", {
// 	dataStyle: "full",
// 	timeStyle: "short",
// });

h1.innerHTML = new Intl.DateTimeFormat("pt-BR", {
	dateStyle: "full",
	timeStyle: "short",
}).format(data);
