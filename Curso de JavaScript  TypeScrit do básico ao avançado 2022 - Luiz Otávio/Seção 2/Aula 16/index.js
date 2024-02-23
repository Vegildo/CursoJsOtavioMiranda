/**
 Luiz Otávio Miranda tem 30 anos, pesa 84 kg
 tem 1.8 de altura e seu IMC é de 25.925925925925924
 Luiz Otávio nasceu em 1980 
 */

const nome = "Leonardo";
const sobrenome = "Braga";
const idade = 33;
const peso = 72;
const alturaEmM = 1.78;

let imc;
let anoNascimento;
imc = peso / alturaEmM ** 2;
anoNascimento = 2022 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg.`);

console.log(`Tem ${alturaEmM} de altura e seu IMC é de ${imc}.`);

console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}.`);
