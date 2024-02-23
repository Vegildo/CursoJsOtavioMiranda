exports.globalMiddleware = (req, res, next) => {
	res.locals.oneVarLocal =
		"Variável local no middleware global";
	next();
};

// exports.globalMiddleware = (req, res, next) => {
// 	if (req.body.cliente) {
// 		req.body.cliente = req.body.cliente.replace(
// 			"VV",
// 			"NÃO USE APELIDOS, como VV por exemplo"
// 		);
// 		console.log(
// 			`O que me enviou foi um: ${req.body}. Se acessarmos sua chave, que está escrita na propriedade name, que está na tag input, dentro do index.ejs, será: ${req.body.cliente}`
// 		);
// 	}
// 	next();
// };

// exports.anotherMiddleware = (req, res, next) => {
// 	if (req.body.cliente) {
// 		console.log(
// 			`Outro middleware global, continue pegando no meu pau... no caso no do ${req.body.cliente}`
// 		);
// 	} else {
// 		console.log(`Outro middleware global, continue pegando no meu pau...`);
// 	}

// 	next();
// };

// module.exports = (req, res, next) => {
// 	console.log("--------------");
// 	console.log("Passei no middleware global, pega no meu pau...");
// 	// console.log(req.body.cliente);
// 	console.log("--------------");
// 	next();
// };
