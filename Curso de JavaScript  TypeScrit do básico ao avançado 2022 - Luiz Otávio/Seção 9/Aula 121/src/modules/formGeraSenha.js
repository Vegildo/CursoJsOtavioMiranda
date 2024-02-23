import generatePassword from "./geradores";

const resp = document.querySelector(".resp");
const qtdCaract = document.querySelector(".qtd");
const chkNum = document.querySelector("#chk-num");
const chkMai = document.querySelector("#chk-mai");
const chkMin = document.getElementById("chk-min");
const chkSym = document.getElementById("chk-sym");

const btn = document.querySelector(".btn");

export default () => {
	btn.addEventListener("click", () => {
		// console.log(chkNum.checked); //"oiee");
		// console.log(chkMai.checked);

		resp.innerHTML = generate();
	});
};

function generate() {
	const password = generatePassword(
		qtdCaract.value,
		chkMai.checked,
		chkMin.checked,
		chkNum.checked,
		chkSym.checked
	);

	return password || "Nada selecionado. Selecione e tente novamente..";
}

// console.log("oi");
// Pega a senha e joga no meu html,  na div resp.
