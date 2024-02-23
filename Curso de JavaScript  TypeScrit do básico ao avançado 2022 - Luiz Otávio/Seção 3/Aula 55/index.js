// For in -> Lê os índices ou chaves do objeto

const people = {
	name: "Leo",
	lastname: "Souza",
	age: 32,
};

for (let key in people) {
	console.log(key, people[key]); //retorna o valor
	console.log(pessoa.key); //retorna undefined
}

/**
 * key é uma variável, não uma chave do objeto pessoa. *Usamos a notação de colchetes para que o JS converta o *valor da variável na chave que desejados em tempo de *execução. Não existe "key" dentro do objeto, existe o *valor que a variável key tem no momento do loop.
 */

// console.log(people.name);
// const key = "name";
// console.log(people[key]);

//                0       1       2
//const fruits = ["Pera", "Uva", "Maça"];

// for (let i = 0; i < fruits.length; i++) {
// 	console.log(fruits[i]);
// }

// for (let i in fruits) {
// 	console.log(fruits[i]);
// }
