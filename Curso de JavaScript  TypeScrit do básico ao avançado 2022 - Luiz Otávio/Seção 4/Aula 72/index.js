//Global
function funcReturn(nome) {
	return function () {
		return nome;
	};
}

const func = funcReturn("leo");
const func2 = funcReturn("natasha");
console.log(func);
