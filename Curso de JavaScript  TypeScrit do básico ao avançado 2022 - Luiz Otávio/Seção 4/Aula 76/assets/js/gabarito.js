function calculatorVV() {
	return {
		display: document.querySelector(".display"),

		start() {
			//alert('Começamos!');
			// this => o objeto, no caso a calculator (lá de baixo do código).
			this.buttonClick();
			this.keyEnter();
		},
		calcOperation() {
			let operation = this.display.value;
			try {
				operation = eval(operation);
				if (!operation) {
					alert("Operação inválida. Reveja sua conta e tente novamente!");
					return;
				}
				this.display.value = String(operation);
			} catch (e) {
				alert("Operação inválida. Reveja sua conta e tente novamente!");
				return;
			}
		},
		btnToDisplay(valor) {
			this.display.value += valor;
		},
		delOneDisplay() {
			this.display.value = this.display.value.slice(0, -1);
			// método slice() separa o array, nesse caso a string, da forma q queremos
		},

		clearDisplay() {
			this.display.value = "";
		},
		keyEnter() {
			this.display.addEventListener("keydown", (e) => {
				//console.log(e);
				if (e.isTrusted || e.key === "Enter") {
					this.calcOperation();
				}
			});
		},
		buttonClick() {
			// this => o objeto, no caso a calculator lá de baixo do código.
			document.addEventListener(
				"click",
				(e) => {
					// this => document pois ele q é invocado no EventListener.
					const elemnt = e.target;
					if (
						elemnt.classList.contains("btn-num") ||
						elemnt.classList.contains("btn-paren") ||
						elemnt.classList.contains("btn-opera")
					) {
						this.btnToDisplay(elemnt.innerText);
					} else if (elemnt.classList.contains("btn-clear")) {
						this.clearDisplay();
					} else if (elemnt.classList.contains("btn-del")) {
						this.delOneDisplay();
					} else if (elemnt.classList.contains("btn-eq")) {
						this.calcOperation();
					}
					// AQUI O FIX
					this.display.focus();
				} // utilizando function normal, podemos no final dela usar o metodo bind, da forma function(){}.bind(this). Ou usar arrow func, como oi utilizado on exercicio
			);
		},
	};
}

//This => quem chama é o this em cada caso.

const calculator = calculatorVV();
calculator.start();
//OBS: O texto escrito na tag é o innerText da tag
// OBS: Arrow functions n permitem alteração do THIS
