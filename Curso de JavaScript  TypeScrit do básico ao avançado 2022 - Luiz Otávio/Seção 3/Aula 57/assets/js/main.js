const paragraph = document.querySelector(".paragraph");

const paragraphs = paragraph.querySelectorAll("p");
//console.log(paragraphs);
// for (let p of paragraphs) {
// 	console.log(p);
// }

const bodyStyle = getComputedStyle(document.body);
const backgroundColorBody = bodyStyle.backgroundColor;
//console.log(backgroundColorBody);

for (let p of paragraphs) {
	// CCS:             JS:
	//background-color     backgroundColor
	p.style.backgroundColor = backgroundColorBody;
	p.style.color = "#FFFFFF"; //"#FFFF" //"white";
}
