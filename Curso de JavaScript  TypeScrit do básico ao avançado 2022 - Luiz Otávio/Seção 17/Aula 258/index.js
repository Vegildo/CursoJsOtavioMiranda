const { html2} = require('./base')

// . qualquer coisa => dot all -> .*
// Quebra de linha => cambiarra [\s\S]
// Onde \s é espaco e \S é um não espaço
const regExp1 = /(<(\w+)(?:[\s\S]*?)>)([\s\S]*?)(<\/\2>)/gi;
// criar um grupo mas q n seja salvo para os retrovisores -> (?:)

// $1 $2 $3 $4  -> Retrovisores \1 \2 \3
console.log(html2);
// console.log(html2.match(regExp1));
console.log(html2.replace(regExp1,'$1Título$4'));

