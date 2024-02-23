import ValidaCPF from "./ValidaCPF";

export default class CPFGenerate {
	rand(min = 100000000, max = 999999999) {
		return String(Math.floor(Math.random() * (max - min) + min));
	}

	format(cpf) {
		return cpf
			.toString()
			.replace(/\D+/g, "")
			.replace(/^([\d]{3})([\d]{3})([\d]{3})([\d]{2})$/, "$1.$2.$3-$4");

            /**
             * return (
             * cpf.slice(0,3)+'.'+
             * cpf.slice(3,6)+'.'+
             * cpf.slice(6,9)+'-'+
             * cpf.slice(9,11)
             * );
             */
	}

	newCpfGenerator() {
		const cpfWithoutDigit = this.rand();
		const digit1 = ValidaCPF.geraDigito(cpfWithoutDigit);
		const digit2 = ValidaCPF.geraDigito(cpfWithoutDigit + digit1);
		const cpfNew = cpfWithoutDigit + digit1 + digit2;
		return this.format(cpfNew);
	}
}
