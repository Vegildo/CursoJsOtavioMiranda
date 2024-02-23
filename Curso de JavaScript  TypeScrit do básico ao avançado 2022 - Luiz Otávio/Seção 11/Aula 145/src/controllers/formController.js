exports.pagForm = (req, res) => {
	res.send(`
    <form action="/form" method="POST">
    Nome do cliente: <input type="text" name="nameKey" value="Exemplo de nome">
    Outro Campo: <input type="text" name="outrakey" value="Exemplo de nome">
    <button>Enviar</button>
    </form>
    `);
};

exports.postForm = (req, res) => {
	// console.log(req.body);
	res.send(`O que me enviou foi: ${req.body.nameKey} ${req.body.outrakey}`);
};
