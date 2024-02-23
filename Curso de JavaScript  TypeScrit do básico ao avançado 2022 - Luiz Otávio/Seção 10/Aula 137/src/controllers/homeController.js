// const HomeModel = require("../models/HomeModel");

// HomeModel.find()
// 	.then(data => console.log(data))
// 	.catch(e => console.log(e));

// HomeModel.create(
// 	{
// 		titulo: "Senhor dos Anéis",
// 		descricao:
// 			"É uma triologia baseada na obra-prima homónima de J. R. R. Tolkien.",
// 	},
// 	{
// 		titulo: "The Hobbit",
// 		descricao:
// 			"É uma triologia baseada na obra-prima homónima de J. R. R. Tolkien.",
// 	}
// )
// 	.then(data => console.log(data))
// 	.catch(e => console.log(e));

//Middlewares

exports.pagInicial = (req, res, next) => {
	res.render("index");
};

exports.postInicial = (req, res) => {
	// console.log(req.body);
	res.send(`O que me enviou foi um: ${req.body} </br>
	Se acessarmos sua chave, que está escrita na propriedade name, que está na tag input, dentro do index.ejs, será: ${req.body.cliente}`);
};
