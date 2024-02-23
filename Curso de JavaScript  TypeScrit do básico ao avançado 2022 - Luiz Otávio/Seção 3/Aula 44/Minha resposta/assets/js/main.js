const CalcIMC = () => {
	const form = document.querySelector("#my-form");
	const res = document.querySelector("#resultado");

	const receiveFormEvent = (e) => {
		e.preventDefault();

		const weight = parseFloat(form.querySelector("#weight").value);
		const height = parseFloat(form.querySelector("#height").value);

		let IMC = (weight / height ** 2).toFixed(2);
		let level;
		//console.log(IMC, weight, height);
		res.style.padding = "0 0 0 15px";

		//validando dados
		if (!weight || !height) {
			res.innerHTML = "ERROR! Verifique seus dados e tente novamente.";
			res.style.background = "var(--bad-color)";
			res.style.color = "var(--secondary-color)";
			return;
		}
		//condicoes
		if (IMC < 18.5) {
			level = `Abaixo do peso`;
			res.style.background = "var(--good-color)";
			res.style.color = "var(--write-color)";
		}
		if (18.5 < IMC <= 24.9) {
			level = `Peso normal`;
			res.style.background = "var(--good-color)";
			res.style.color = "var(--write-color)";
		}
		if (24.9 < IMC <= 29.9) {
			level = `Sobrepeso`;
			res.style.background = "var(--good-color)";
			res.style.color = "var(--write-color)";
		}
		if (29.9 < IMC <= 34.9) {
			level = `Obesidade grau 1`;
			res.style.background = "var(--bad-color)";
			res.style.color = "var(--secondary-color)";
		}
		if (34 < IMC <= 39.9) {
			level = `Obesidade grau 2`;
			res.style.background = "var(--bad-color)";
			res.style.color = "var(--secondary-color)";
		}
		if (IMC > 39.9) {
			level = `Obesidade grau 3`;
			res.style.background = "var(--bad-color)";
			res.style.color = "var(--secondary-color)";
		}

		IMC = IMC.toString().replace(".", ",");
		res.innerHTML = `Seu IMC é ${IMC} - ${level}`;
	};

	form.addEventListener("submit", receiveFormEvent);
};

CalcIMC();
