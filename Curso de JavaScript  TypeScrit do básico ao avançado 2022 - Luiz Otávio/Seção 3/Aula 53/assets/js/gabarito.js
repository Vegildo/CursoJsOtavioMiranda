const elements = [
	{
		tag: "p",
		text: "Não desista. Geralmente é a última chave no chaveiro que abre a porta!",
	}, //0
	{
		tag: "div",
		text: "Respeitar as lutas que os outros travam sozinhos é o jeito mais verdadeiro de empatia.",
	}, //1
	{
		tag: "section",
		text: "Não ache que todas as pessoas engraçadas têm uma vida feliz, uma bela risada pode ser um choro na alma.",
	}, //2
	{ tag: "footer", text: "Conecte-se ao que realmente importa." }, // 3
];
const container = document.querySelector(".container");
const div = document.createElement("div");

for (let i = 0; i < elements.length; i++) {
	//console.log(elements[i]);
	const { tag, text } = elements[i];
	const createTag = document.createElement(tag);
	const createText = document.createTextNode(text);
	//createTag.innerText = text; // como so tem texto fica mais seguro utilizar essa opção
	createTag.appendChild(createText);
	div.appendChild(createTag);
}

container.appendChild(div);
