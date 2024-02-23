const { txt } = require('./base')

// g - global (encontra todas as ocorreências)
// i - case insensitive
// () - groupos
// |  - ou

const regExp1 = /João/gi;
const regExp2 = /Teve 5 filhos/i;
const regExp3 = /(Teve )(5 filhos)/i;
const regExp4 = /(maria|luiz|joão)(, hoje sua esposa)/i;

const found = regExp4.exec(txt)

console.log(found[0]);
console.log(found[1]);
console.log(found[2]);

// console.log(regExp3.exec(txt));
// console.log(regExp2.exec(txt));//[0]);
// console.log(regExp1.test(txt));

