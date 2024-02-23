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

// CPF USADO:
let cpf = "705.484.450-52";

// Limpando símbolos:
let cpfClean = cpf.replace(/\D+/g, "");

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

// Add o dígito dois no array:
cpfCleanArrayWithouD.push(String(digit2));

let cpfMade = cpfCleanArrayWithouD
	.toString()
	.replace(/\D+/g, "")
	.replace(/^([\d]{3})([\d]{3})([\d]{3})([\d]{2})$/, "$1.$2.$3-$4");

if (cpf === cpfMade) {
	// console.log(cpfMade);
	console.log(`Parabéns! Você conseguiu!! Pois, ${cpf} é igual a ${cpfMade}`);
}
