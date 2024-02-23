const calculatorVV = () => {
	//-----------------------------------------------------------------------------
	//Criando uma variavel com o display, usando func
	const createElements = (ele) => {
		return document.querySelector(ele);
	};

	const display = createElements(".display");
	//console.log(display);

	//-----------------------------------------------------------------------------
	// funcoes para numeros/parentese/operadores no dislay, para deletetar ultimo valor clicado e para clear. E por ultimo a função de calculo propriamente de dita.

	const calcOperation = () => {
		//let operation = display.value;
		try {
			let operation = eval(display.value);
			if (!operation) {
				alert("Operação inválida... Reveja sua conta e tente novamente!");
				return;
			}
			display.value = String(operation);
		} catch (e) {
			alert("Operação inválida... Reveja sua conta e tente novamente!");
			return;
		}
	};

	const clearDisplay = () => {
		display.value = "";
	};

	const delDisplay = () => {
		display.value = display.value.slice(0, -1);
	};

	const btnToDisplay = (val) => {
		display.value += val;
	};

	//-----------------------------------------------------------------------------
	//Funcoes com os "escutadores de eventos", tanto para o click com o mouse quanto para o enter do teclado.

	const keyEnter = () => {
		document.addEventListener("keydown", (e) => {
			//console.log(e);
			if (e.isTrusted & (e.key === "Enter")) {
				calcOperation();
			}
		});
	};

	const buttonClick = () => {
		document.addEventListener("click", (e) => {
			//console.log(e);
			const element = e.target;
			//console.log(element);
			if (
				element.classList.contains("btn-num") ||
				element.classList.contains("btn-paren") ||
				element.classList.contains("btn-opera")
			) {
				btnToDisplay(element.innerText);
			}
			if (element.classList.contains("btn-clear")) clearDisplay();
			if (element.classList.contains("btn-del")) delDisplay();
			if (element.classList.contains("btn-eq")) calcOperation();

			//Fix
			display.focus();
		});
	};

	//-----------------------------------------------------------------------------
	//Funcao para começar e sua chamada.
	const start = () => {
		buttonClick();
		keyEnter();
	};

	start();
};

calculatorVV();
