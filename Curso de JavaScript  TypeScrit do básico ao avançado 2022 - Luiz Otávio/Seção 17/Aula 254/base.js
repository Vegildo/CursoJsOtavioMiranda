const txt = `
João trouxe     flores para sua amada namorada em 10 de janeirode 1970,
Maria era o nome dela.


Foi um ano excelente na vida de joão. Teve 5 filhos, todos adultos atualmente.
maria, hoje sua esposa, ainda faz aquele café com pão de queijo nas tardes de
domingo. Também né! Sendo a boa mineira que é, nunca esquece seu famoso
pão de queijo.
Não canso de ouvir a Maria:
"Joooooooooãooooooo, o café tá rontinho aqui. Veeemm"!
`;

const files = [
	"Atenção.jpg",
	"FOTO.jpeg",
	"Meu gatinho.jpg",
	"Meu gatinho.JPG",
	"Meu gatinho.JPEG",
	"Meu gatinho.JPeeEEEEeeeeeeeeeeeeeeeeeeeeeeeeEEEEEEEEEEG",
	"Marido.png",
	"lista de compras.txt",
];

const html1 = "<p>Olá mundo</p> <p>Olá de novo</p> <div>Sou a div</div>";
const html2 = `<p 
data-teste='teste' 
class="teste teste">
  Olá mundo
</p> <p>Olá mundo</p> <div>Sou a div</div>`;

module.exports = {
	txt,
	files,
	html1,
	html2,
};
