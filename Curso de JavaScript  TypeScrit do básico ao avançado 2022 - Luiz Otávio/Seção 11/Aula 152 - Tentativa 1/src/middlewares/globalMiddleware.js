exports.middlewareGlobal = (req, res, next) => {
	res.locals.errors = req.flash('errors'); // Para capturar as mensagens de errors e jogar numa variavel, chamada errors, usavel nos arquivos ejs 
	res.locals.success = req.flash('success');	
	next();
};

exports.checkCsrfError = (err, req, res, next) => {
	if (err) {
		return res.render("404.ejs");
	}
};

exports.anotherMiddleware = (req, res, next) => {
	next();
};