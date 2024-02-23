const num = Number(prompt("Digite um número:"));
const numTit = document.getElementById("num-txt");
const txt = document.getElementById("txt");

numTit.innerHTML = num;

txt.innerHTML += "";
txt.innerHTML += `<h1>Seu número é ${num}.</h1>`;
txt.innerHTML += `<p>Raiz quadrada do número é: </strong>${Math.sqrt(
	num
)}</strong>.</p>`;
// Math.sqrt(x) = x**0.5
txt.innerHTML += `<p>O número <strong>${num}</strong> é inteiro? ${Number.isInteger(
	num
)}.</p>`;
txt.innerHTML += `<p>O número <strong>${num}</strong> é NaN? ${Number.isNaN(
	num
)}.</p>`;
txt.innerHTML += `<p>Arredondando para baixo é: <strong>${Math.floor(
	num
)}</strong>.</p>`;
txt.innerHTML += `<p>Arredondando para cima é: <strong>${Math.ceil(
	num
)}</strong>.</p>`;
txt.innerHTML += `<p>Com duas casas decimais é: <strong>${num.toFixed(
	2
)}</strong>.</p>`;
