class ValidationForm {
	constructor() {
		this.form = document.querySelector(".form");
		this.events();
	}

	events() {
		this.form.addEventListener("submit", e => {
			this.handleSubmit(e);
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		// alert("Formulário não enviado...");
		const validSpaces = this.isValid();
		const validPassword = this.isPasswordValid();

		if (this.isValid && this.isPasswordValid) {
			alert("Formulário enviado com sucesso.");
			this.form.submit();
		}
	}

	isPasswordValid() {
		let valid = true;

		const password = this.form.querySelector("#password");
		const repeatPassword = this.form.querySelector("#repeat-password");

		if (password.value !== repeatPassword.value) {
			this.createError(
				password,
				"Senhas não são iguais. Por favor repita a senha de forma igual."
			);

			this.createError(
				repeatPassword,
				"Senhas não são iguais. Por favor repita a senha de forma igual."
			);
			valid = false;
		}

		if (password.value.length < 6 || password.value.length > 12) {
			this.createError(
				password,
				"SENHA INVÁLIDA. Por favor insira uma senha que tenha entre 6 e 12 caracteres"
			);
			valid = false;
		}

		return valid;
	}

	isValid() {
		let valid = true;

		for (let errorText of this.form.querySelectorAll(".error-text")) {
			errorText.remove();
		}

		for (let space of this.form.querySelectorAll(".validate")) {
			// console.log(space);
			// console.log(space.id);

			//Meu modo:
			let label = document.querySelector(`[for=${space.id}]`);
			// console.log(label);
			// console.log(label.innerHTML);

			//Modo do professor:
			// const labelText = space.previousElementSibling.innerText;

			if (!space.value) {
				this.createError(
					space,
					`O campo ${label.innerHTML} está em branco. Por favor insira seus dados.`
				);
				valid = false;
			}

			if (space.classList.contains("cpf")) {
				if (!this.validationCPF(space)) valid = false;
			}

			if (space.classList.contains("user")) {
				if (!this.validationUsuario(space)) valid = false;
			}
		}

		return valid;
	}

	validationUsuario(spc) {
		const user = spc.value;

		let valid = true;

		if (user.length < 3 || user.length > 12) {
			this.createError(
				spc,
				"USUÁRIO INVÁLIDO. Por favor insira um usúario que tenha entre 3 e 12 caracteres"
			);
			valid = false;
		}

		if (!user.match(/^[a-zA-Z0-9]+$/g)) {
			this.createError(
				spc,
				"USUÁRIO INVÁLIDO. Por favor insira um usúario que tenha somente números e/ou letras."
			);
			valid = false;
		}

		return valid;
	}

	validationCPF(spc) {
		const cpf = new ValidaCPF(spc.value);

		if (!cpf.valida()) {
			this.createError(
				spc,
				"CPF INVÁLIDO. Por favor insira o cpf corretamente"
			);
			return false;
		}

		return true;
	}

	createError(space, msg) {
		const div = document.createElement("div");
		div.innerHTML = msg;
		div.classList.add("error-text");
		// div.style.margin = "0px 0px 20px 0px";
		// div.style.backgroundColor = "var(--primary-color)";
		// div.style.color = "var(--write-color)";

		space.style.margin = "0px";
		space.insertAdjacentElement("afterend", div);
	}
}

const valid = new ValidationForm();
