/**
 * Escreva uma função chama ePAisagem que recebe dois argumentos, largura e
 * altura de uma imagem (um número). Retorne true se a imagem estiver no
 * modo paisagem.
 */

const ePaisagem = (largura, altura) => {
	return largura > altura ? true : false;
};

const larg = 100;
const alt = 50;

console.log(ePaisagem(larg, alt));
