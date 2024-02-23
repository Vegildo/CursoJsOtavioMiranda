const mongoose = require("mongoose");
const validator = require('validator');

const LoginSchema = new mongoose.Schema({	
	email: { type: String, required: true },
	password: { type: String, required: true },
});

const LoginModel = mongoose.model("Login", LoginSchema);
// module.exports = LoginModel;


class Login {
	constructor(body) {
		this.body = body;
		this.errors = [];
		this.user = null;
	}

	//Para usar a base de dados mongoose do MongoDB precisamos 
	// usar promises, por isso vamos transformar o método register em
	// um método assincrono.
	
	async register() {
		this.valida();
		if(this.errors.length > 0) return;
		// Td em uma funcao async q estiver no await precisar estar em um bloco try/catch
		//Se der um erro precisamos saber qual foi
		try {
			this.user = await LoginModel.create(this.body);	
		} catch (err) {
			console.log(err);
		}
		
	}

	valida() {
		this.cleanUp();
		// Validação:
		// O email precisa ser válido
		if(!validator.isEmail(this.body.email)) {
			this.errors.push("E-mail inválido");
		}	
		// A senha precisa ter entre 5 e 15		
		if (this.body.password.length < 5 || this.body.password.length >= 15) {
			this.errors.push("A senha precisa ter entre 5 à 15 caracteres");
		} 
	}

	cleanUp() {
		//Faz um loop nas chaves do body, e garante que tudo q tá no body é string
		for (const key in this.body) {
			if(typeof this.body[key] !== 'string') {
				this.body[key] = '';
			}			
		}
		this.body = {
			email: this.body.email,
			password: this.body.password,
		};
	}



}
module.exports = Login;

