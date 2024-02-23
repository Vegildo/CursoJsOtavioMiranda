function CalculatorVV() {
	this.display = document.querySelector(".display");

	this.start = () => {
		//alert("Funciona?!");
		this.buttonClick();
		this.keyEnter();
	};

	this.keyEnter = () => {
		addEventListener("keyup", (e) => {
			if (e.isTrusted & (e.code === "Enter")) {
				this.calcOperation();
			}
		});
	};

	this.calcOperation = () => {
		try {
			let operation = eval(this.display.value);
			if (!operation) {
				alert("Operação inválida... Reveja sua conta e tente novamente!");
				return;
			}
			this.display.value = String(operation);
		} catch (e) {
			alert("Operação inválida... Reveja sua conta e tente novamente!");
			return;
		}
	};

	// this.clearDisplay = () =>{
	// 	this.display.value = '';
	// }

	this.delDisplay = () =>
		(this.display.value = this.display.value.slice(0, -1));

	this.btnToDisplay = (element) => {
		this.display.value += element.innerText;
		// AQUI O FIX ou no fim de buttonClick
		//this.display.focus();
	};

	this.buttonClick = () => {
		document.addEventListener("click", (event) => {
			const element = event.target;
			//console.log(elemnt);
			if (
				element.classList.contains("btn-num") ||
				element.classList.contains("btn-paren") ||
				element.classList.contains("btn-opera")
			) {
				this.btnToDisplay(element);
			}
			if (element.classList.contains("btn-clear")) {
				//this.clearDisplay();
				this.display.value = "";
			}
			if (element.classList.contains("btn-del")) this.delDisplay();
			if (element.classList.contains("btn-eq")) {
				this.calcOperation();
			}
			// AQUI O FIX
			this.display.focus();
		});
	};
}

const Calculator = new CalculatorVV();
Calculator.start();

//Exercicio aula 77-78 (Mudar exercicio da aula 76 para func contrutora): {FEITO}
// function CalculatorVV(display) {
// 	this.display = display;

// 	this.start = function () {
// 		//alert('Começamos!');
// 		// this => o objeto, no caso a calculator (lá de baixo do código).
// 		this.buttonClick();
// 		this.keyEnter();
// 	};
// 	this.calcOperation = function () {
// 		let operation = this.display.value;
// 		try {
// 			operation = eval(operation);
// 			if (!operation) {
// 				alert("Operação inválida. Reveja sua conta e tente novamente!");
// 				return;
// 			}
// 			this.display.value = String(operation);
// 		} catch (e) {
// 			alert("Operação inválida. Reveja sua conta e tente novamente!");
// 			return;
// 		}
// 	};
// 	this.btnToDisplay = function (valor) {
// 		this.display.value += valor;
// 	};
// 	this.delOneDisplay = function () {
// 		this.display.value = this.display.value.slice(0, -1);
// 		// método slice() separa o array, nesse caso a string, da forma q queremos
// 	};

// 	this.clearDisplay = function () {
// 		this.display.value = "";
// 	};
// 	this.keyEnter = function () {
// 		this.display.addEventListener("keydown", (e) => {
// 			//console.log(e);
// 			if (e.isTrusted || e.key === "Enter") {
// 				this.calcOperation();
// 			}
// 		});
// 	};
// 	this.buttonClick = function () {
// 		// this => o objeto, no caso a calculator lá de baixo do código.
// 		document.addEventListener(
// 			"click",
// 			(e) => {
// 				// this => document pois ele q é invocado no EventListener.
// 				const elemnt = e.target;
// 				if (
// 					elemnt.classList.contains("btn-num") ||
// 					elemnt.classList.contains("btn-paren") ||
// 					elemnt.classList.contains("btn-opera")
// 				) {
// 					this.btnToDisplay(elemnt.innerText);
// 				} else if (elemnt.classList.contains("btn-clear")) {
// 					this.clearDisplay();
// 				} else if (elemnt.classList.contains("btn-del")) {
// 					this.delOneDisplay();
// 				} else if (elemnt.classList.contains("btn-eq")) {
// 					this.calcOperation();
// 				}
// 				// AQUI O FIX
// 				this.display.focus();
// 			} // utilizando function normal, podemos no final dela usar o metodo bind, da forma function(){}.bind(this). Ou usar arrow func, como oi utilizado on exercicio
// 		);
// 	};
// }

//This => quem chama é o this em cada caso.
//const display = document.querySelector(".display");
//const Calculator = new CalculatorVV(display);
//Calculator.start();
//OBS: O texto escrito na tag é o innerText da tag
// OBS: Arrow functions n permitem alteração do THIS
