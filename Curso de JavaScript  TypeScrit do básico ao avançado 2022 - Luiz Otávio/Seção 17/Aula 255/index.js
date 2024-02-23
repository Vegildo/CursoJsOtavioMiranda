//      Conjuntos:
//          [] -> tudo o q está dentro
//          [^] -> tudo exceto o q está dentro

//       Ranges:
//         [a-z] -> range de letras do alfabeto.
//         [1-9] -> tange de números.
//         [min-Max] -> range é sempre do menor pro Maior.
//         [min-Maxmin-Maxmin-Max] -> ranges um do lado do outro adicionam.
//         [\u0020-\u002F\u003A-\u0040] -> range de símbolos. Unicode

const { alphabet } = require("./base");

const regExp1 = /[a-zA-Z0-9]+/g;

console.log(alphabet.match(regExp1));

// Tudo que tiver dentro de conchetes são conjuntos, e dentro deles podemos ter ranges, utilizando traços
