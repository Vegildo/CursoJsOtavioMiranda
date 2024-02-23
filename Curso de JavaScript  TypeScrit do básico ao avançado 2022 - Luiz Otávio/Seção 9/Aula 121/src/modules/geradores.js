//Gerador de senha

import { Number } from "core-js";

//Range simbolo: 33/46, 58/64 e 123/126
//Range num: 47/57
//Range Letra maiúscula: 65/90
//Range Letra minúscula: 97/122

const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);

const generateNum = () => String.fromCharCode(rand(48, 58));
const generateUpperCase = () => String.fromCharCode(rand(65, 91));
const generateLowerCase = () => String.fromCharCode(rand(97, 123));

const symbols = ".>:?^~`'!@#$¨&*|[]}{()=+-_";
const generateSymbol = () => symbols[rand(0, symbols.length)]; // pegar um index aleatório usando rand de zro ao tamanho do array de string symbols

export default function generatePassword(qtd, mai, min, num, sym) {
	const passwordArray = [];
	qtd = Number(qtd);

	if (qtd >= 1 && qtd <= 30) {
		for (let i = 0; i < qtd; i++) {
			num && passwordArray.push(generateNum());
			min && passwordArray.push(generateLowerCase());
			mai && passwordArray.push(generateUpperCase());
			sym && passwordArray.push(generateSymbol());
		}

		// console.log(passwordArray.join("").slice(0, qtd));
		passwordArray.sort(() => 0.5 - Math.random());
		return passwordArray.join("").slice(0, qtd);
	} else {
		alert("Escolha uma senha entre 1 a 30 caracteres e tente novamente...");
	}
}

// generatePassword(3, true, false, true, false);
// console.log(generateNum());
// console.log(generateUpperCase());
// console.log(generateLowerCase());
// console.log(generateSymbol());
// export const randNum = (min = 47, max = 57) => {
// 	return Math.floor(Math.random() * (max - min) + min);
// };

// export const randLetMai = (min = 65, max = 90) => {
// 	return Math.floor(Math.random() * (max - min) + min);
// };

// export const randLetMin = (min = 97, max = 122) => {
// 	return Math.floor(Math.random() * (max - min) + min);
// };

// console.log(String.fromCharCode(randNum()));
// console.log(String.fromCharCode(randLetMai()));
// console.log(String.fromCharCode(randLetMin()));
// export var gerador = () => {
// 	num = 33;
// 	return num;
// };

// console.log(String.fromCharCode(gerador()));
