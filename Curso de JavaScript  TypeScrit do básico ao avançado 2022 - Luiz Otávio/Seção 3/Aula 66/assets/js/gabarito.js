// new Date(0); 0123467

function criaHoraDosSegundos(segundos) {
	const data = new Date(segundos * 1000);
	return data.toLocaleDateString("pt-BR", {
		hour12: false,
		timeZone: "UTC",
	});
}

const clock = document.querySelector(".clock");
const start = document.querySelector(".start");
const stop = document.querySelector(".stop");
const reset = document.querySelector(".reset");

let seconds = 0;
let timer;

function iniciaRelogio() {
	timer = setInterval(function () {
		segundos++;
		clock.innerHTML = criaHoraDosSegundos(segundos);
	}, 1000);
}

start.addEventListener("click", () => {
	iniciaRelogio();
});

stop.addEventListener("click", () => {
	clearInterval(timer);
});

reset.addEventListener("click", () => {
	clearInterval(timer);
	clock.innerHTML = "00:00:00";
});
