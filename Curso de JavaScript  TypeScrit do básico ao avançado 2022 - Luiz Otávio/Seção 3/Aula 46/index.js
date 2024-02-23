// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date

const zeroAEsq = (num) => {
	return num >= 10 ? num : `0${num}`;
};

const dateFormat = (d) => {
	//console.log(d);
	const year = zeroAEsq(d.getFullYear());
	const mes = zeroAEsq(d.getMonth() + 1);
	const day = zeroAEsq(d.getDate());
	const hour = zeroAEsq(d.getHours());
	const min = zeroAEsq(d.getMinutes());
	const sec = zeroAEsq(d.getSeconds());

	return `${day}/${mes}/${year} ${hour}:${min}:${sec}`;
};

const date = new Date();
const brazilDate = dateFormat(date);
console.log(brazilDate);

// const threeHours = 60 * 60 * 3 * 1000; // *1000 para tirar de milisgundo e colocar em segundo.
// const oneDay = 60 * 60 * 24 * 1000;

//const date = new Date(0 + threeHours + oneDay); // 01/01/1970 Timestamp unix ou época unix

//const date = new Date(2019, 3, 20, 15, 14, 27, 1000); // new Date(Ano, Mês, Dia, Hora, Min, Sec, MilésimoSec), tds os omitidos serão dadas o valor default de zero. Trabalhando dessa maneira temos que ter pelo menos 2 parâmetros!

//formato mais utilizado:
//const date = new Date("2019-04-20T20:20:59.100"); // No lugar o T podemos dixar um espaço que também será aceitado.

// console.log("Dia", date.getDate());
// console.log("Mês", date.getMonth() + 1); //Mês começa do zero
// console.log("Ano", date.getFullYear());
// console.log("Hora", date.getHours());
// console.log("Min", date.getMinutes());
// console.log("Sec", date.getSeconds());
// console.log("MS", date.getMilliseconds());
// console.log("Dia da Semana", date.getDay()); // 0 = Domingo, 6 = Sábado
// console.log(date.toString());

//Outra forma de conseguir os milésimos de segundos é:
//console.log("MS ATUAL", Date.now());
