// 705.484.450-52    070.987.720-03

/*
 
 7x  0x  5x  4x  8x  4x  4x  5x  0x
 10  9   8   7   6   5   4   3   2
 70  0   40  28  48  20  16  15  0 = 237
 
 11 - (237 % 11) = 5 (Primeiro dígito) 
 // Se o dígito for maior que 9, consideramos 0.

 7x  0x  5x  4x  8x  4x  4x  5x  0x  5x
 11  10  9   8   7   6   5   4   3   2  
 77  0   45  32  56  24  20  20  0   10 = 284

 11 - (284 % 11) = 2 (Segundo dígito)
 // Se o dígito for maior que 9, consideramos 0.
 */

class cpfValidation {
	constructor(cpfSend) {
		this.cpfSend = cpfSend;
	}

	validation() {
		if (typeof this.cpfSend === "undefined") {
			return console.log(
				"Cpf digitado errado, por favor verifique e envie novamente"
			);
		}
		// Limpando símbolos:
		let cpfClean = this.cpfSend.replace(/\D+/g, "");
		// console.log(cpfClean.length);

		if (cpfClean.length !== 11) {
			return console.log(
				"Cpf digitado com mais de 11 digitos, por favor verifique e envie novamente"
			);
		}

		if (cpfClean[0].repeat(cpfClean.length) === cpfClean) {
			return console.log(
				"Cpf digitado é uma sequência de 11 digitos IGUAIS e portanto é INVÁLIDO, por favor verifique e envie novamente"
			);
		}

		// Criando um Array:
		let cpfCleanArray = Array.from(cpfClean);

		// Retirando os 2 Dígitos finais:
		let cpfCleanArrayWithouD = cpfCleanArray.slice(0, -2);

		// Fazendo a conta da tabela, para o digit 2:
		let cpfContaDigit1 = cpfCleanArrayWithouD.reduce((ac, val, index) => {
			// ac + Number(val)
			ac = ac + Number(val) * (10 - index);
			return ac;
		}, 0);

		// Fazendo a conta para achar o dígito 1:
		let digit1 = 11 - (cpfContaDigit1 % 11);

		if (digit1 >= 10) {
			digit1 = 0;
		}

		// Add o dígito um no array:
		cpfCleanArrayWithouD.push(String(digit1));

		// Fazendo a conta da Tabela, para o digit 1:
		let cpfContaDigit2 = cpfCleanArrayWithouD.reduce((ac, val, index) => {
			// ac + Number(val)
			ac = ac + Number(val) * (11 - index);
			return ac;
		}, 0);

		// Fazendo a conta para achar o dígito21:
		let digit2 = 11 - (cpfContaDigit2 % 11);

		if (digit2 >= 10) {
			digit2 = 0;
		}

		// Add o dígito dois no array:
		cpfCleanArrayWithouD.push(String(digit2));

		let cpfMade = cpfCleanArrayWithouD
			.toString()
			.replace(/\D+/g, "")
			.replace(/^([\d]{3})([\d]{3})([\d]{3})([\d]{2})$/, "$1.$2.$3-$4");

		if (this.cpfSend === cpfMade) {
			// console.log(cpfMade);
			return console.log(
				`Esse CPF é VÁLIDO!! Pois, ${this.cpfSend} é igual a ${cpfMade}`
			);
		} else {
			return console.log(
				`Esse CPF é INVÁLIDO!! Pois, ${this.cpfSend} NÃO é igual a ${cpfMade}`
			);
		}
	}
}

const cpf1 = new cpfValidation("705.484.450-52");
cpf1.validation();

const cpf2 = new cpfValidation("070.987.720-03");
cpf2.validation();

const cpf3 = new cpfValidation("111.111.111-11");
cpf3.validation();

const cpf4 = new cpfValidation("705.484.450-43");
cpf4.validation();
