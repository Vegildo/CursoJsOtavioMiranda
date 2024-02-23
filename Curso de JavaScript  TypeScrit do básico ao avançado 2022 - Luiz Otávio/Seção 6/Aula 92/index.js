/**
 * Object.values
 * Object.entries
 * Object.assign(des, any)
 * Object.getOwnPropertyDescriptor(o, 'prop')
 * ...(spread)

//Já vimos
 * Object.keys //Retorna as chaves
 * Object.freeze //Congela o objeto
 * Object.defineProperties //Define várias propriedades
 * Object.defineProperty //Define ema propriedade
*/
const produto = { nome: "Caneca", preco: 1.8 };
// console.log(produto);
// const outroProduto = { nome: produto.nome, preco: produto.preco };

//           Object.entries
// console.log(Object.entries(produto));
// for (let entry of Object.entries(produto)) {
// 	console.log(entry);
// }
for (let [chave, valor] of Object.entries(produto)) {
	console.log(chave, valor);
}

//           Object.values
// console.log(Object.values(produto));

//           Object.getOwnPropertyDescriptor(obj, 'prop'):

// console.log(Object.getOwnPropertyDescriptor(produto, "nome"));

//           Object.freeze:
// Object.freeze(produto);
// produto.nome = "Chaleira"
// console.log(produto);

//           Object.keys:

// console.log(Object.keys(produto));

//           ...(spread):
//const outroProduto = { ...produto, material: "vidro" };

//           Object.assign(des, any):
//const outroProduto = Object.assign({}, produto, { material: "vidro" });

// outroProduto.nome = "Copo";
// outroProduto.preco = 0.8;

// console.log(produto);
// console.log(outroProduto);
