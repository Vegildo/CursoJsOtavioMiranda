const { lookahead } = require('./base')

// console.log(lookahead);

const cpf = `
012.250.796-10
000.000.000-01
111.111.111-11
999.999.999-99
555.555.555-55
147.285.963-10
aaa.bbb.ccc-dd
`;

// Com o netavive lookbehind eu posso já validar cpfs sem sequencias!
const regexCPF = /^(?!^(\d)\1{2}\.\1{3}\.\1{3}-\1{2}$)\d{3}\.\d{3}\.\d{3}\-\d{2}$/gm

// console.log(cpf.match(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/gm));
console.log(cpf.match(regexCPF));

//   Negative lookbehind (frases que não começam com OFFLINE)
// const regExpOn = /^.+(?<!offline.+)$/gim;
// console.log(lookahead.match(regExpOn));

//   Negative lookabehind (frases que não começam com ONLINE)
// const regExpOff = /^.+(?<!online.+)$/gim;
// console.log(lookahead.match(regExpOff));


//   Positive lookbehind (frases que começam com ONLINE)
// const regExpOn = /(?<=online\s+)\S+.*/gim;
// console.log(lookahead.match(regExpOn));

//   Positive lookabehind (frases que começam com OFFLINE)
// const regExpOff = /(?<=offline\s+)\S+.*/gim;
// console.log(lookahead.match(regExpOff));

//   Negative lookahead (frases não terminam com inactive)
// const regExpActive = /^(?!.+inactive).+$/gim;
// console.log(lookahead.match(regExpActive));

//   Negative lookahead (frases não terminam com active)
// const regExpInactive = /^(?!.+[^in]active).+$/gim;
// console.log(lookahead.match(regExpInactive));

//   Positive lookahead (frases que terminam com active)
// const regExpActive = /.+(?=[^in]active)/gim;
// console.log(lookahead.match(regExpActive));

//   Positive lookahead (frases que terminam com inactive)
// const regExpInactive = /.+(?=\s+inactive)/gim;
// console.log(lookahead.match(regExpInactive));

// const regExpActive = /.+[^in]active$/gim;
// const regExpInactive = /.+inactive$/gim;


// console.log(lookahead.match(regExpActive));
// console.log(lookahead.match(regExpInactive));

