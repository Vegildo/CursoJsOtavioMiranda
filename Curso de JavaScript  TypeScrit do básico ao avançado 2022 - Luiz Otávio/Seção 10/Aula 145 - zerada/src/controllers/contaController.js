exports.pagConta = (req, res, next) => {
	console.log("--------------");
	console.log("Respondendo ao cliente");
	console.log(
		`Da middleware 'página inicial', olha o que temos na req.session.nome: ${req.session.nome}`
	);
	console.log("--------------");
	res.send("Obrigado por tudo, AGRADECER SEMPRE!");
	// return; Com return eu acabo a funçao aqui tirando a chance de ter middlewares posteriores
	next();
};
