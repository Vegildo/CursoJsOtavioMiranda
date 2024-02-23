const { html1, html2 } = require("./base");

//    padrão         <*>***</*>  (repetidas vezes)
//    REGEX        /<.+>.+<\/.+>/g

const regExpTagGreedy = /<.+>.+<\/.+>/g; // greedy, máximo possível
const regExpTagLazy = /<.+?>.+?<\/.+?>/g; // non-greedy (lazy), mínimo possível.

console.log(html1.match(regExpTagGreedy));

console.log(html1.match(regExpTagLazy));
