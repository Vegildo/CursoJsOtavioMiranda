// const { async } = require('regenerator-runtime');
const Login = require('../models/LoginModel')

exports.index = (req, res) => {	
	res.render("login");
};

exports.register = async function(req,res) {
	// res.send(req.body);
	try {
		const login = new Login(req.body);
		// res.send(login.body);
		await login.register();
	
		if(login.errors.length > 0) {
			req.flash('errors', login.errors);
			req.session.save(function() {
				return res.redirect('/login/index');
			});
			return;
		}
		req.flash('success', 'Seu usuário foi criado com sucesso.');
		req.session.save(function() {
			return res.redirect('/login/index');
		});
		// return res.send(login.body);		
	} catch (e) {
		console.log(e);
		return res.render('404');
	}
}
