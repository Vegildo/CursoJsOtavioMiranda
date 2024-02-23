const Login = require("../models/LoginModel");

exports.index = (req, res) => res.render("login");


//Como o método register importante do LoginModel.js é async e é usada
// na funcao abaixo. Enão ela tb precisa ser async

exports.register = async function(req, res) {
	// res.send('Info Salva!');
	// res.send(req.body);
	// const login = new Login(req.body); //Instância da classe Login criada no 
	// res.send(login.body);
	try {
		const login = new Login(req.body);
		await login.register();
		
		if (login.errors.length > 0) {
			req.flash('errors', login.errors);
			req.session.save(function() {
				return res.redirect('http://localhost:3000/login/index');
			});
			return;
		}
		// res.send(login.errors);
		req.flash('success', "Seu usuário foi criado com sucesso.");
		req.session.save(function() {
				return res.redirect('http://localhost:3000/login/index');
		});	
	} catch (e) {
		console.log(e)
		return res.render('404');
	}	
};
