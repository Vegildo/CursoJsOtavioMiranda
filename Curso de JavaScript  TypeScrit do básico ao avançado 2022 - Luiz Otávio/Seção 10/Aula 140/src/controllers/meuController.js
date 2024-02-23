// Func pra get
exports.pagMeu = (req, res) => {
	res.send(`
    <form action="/meu" method="POST">
    Nome: <input type="text" name="nameKey" value="Exemplo de nome">
    Sobrenome: <input type="text" name="lastNameKey" value="Exemplo de sobrenome">
    <button>Enviar</button>
    </form>
    `);
};

// Func pra post
exports.postMeu = (req, res) => {
	res.send(`O nome envaido foi: ${req.body.nameKey} ${req.body.lastNameKey}`);
};
