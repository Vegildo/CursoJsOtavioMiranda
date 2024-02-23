const { cpfs, cpfs2} = require('./base')

// const cpf = '254.224.877-45';
const regExp1 = /^(\d{3}\.){2}\d{3}\-\d{2}$/gm;

console.log(cpfs2);
// console.log(cpf.match(regExp1));
// console.log(cpfs.match(regExp1));
console.log(cpfs2.match(regExp1));

