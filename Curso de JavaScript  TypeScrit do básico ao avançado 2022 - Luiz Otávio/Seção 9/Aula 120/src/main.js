import CPFGenerate from "./modules/CPFGenerate";

import "./assets/css/style.css";

(function () {
	const generated = new CPFGenerate();
	const cpfGenerate = document.querySelector(".generated-cpf");
	cpfGenerate.innerHTML = generated.newCpfGenerator();
})();
