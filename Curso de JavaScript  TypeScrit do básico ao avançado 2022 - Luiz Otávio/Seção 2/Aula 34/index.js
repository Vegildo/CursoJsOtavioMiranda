function Enviar() {
	const form = document.querySelector(".myform");
	const res = document.querySelector(".myres");

	const people = [];

	function receiveFormEvent(e) {
		e.preventDefault();

		const name = form.querySelector(".name");
		const lastname = form.querySelector(".lastname");
		const weight = form.querySelector(".weight");
		const height = form.querySelector(".height");

		//console.log(name.value, lastname.value, weight.value, height.value);
		peopleObj = {
			name: name.value,
			lastname: lastname.value,
			weight: weight.value,
			height: height.value,
		};

		res.innerHTML += peopleObj.name + " ";
		res.innerHTML += peopleObj.lastname + " ";
		res.innerHTML += peopleObj.weight + " ";
		res.innerHTML += peopleObj.height + "</br>";
		people.push(peopleObj);

		//console.log(people);
	}
	form.addEventListener("submit", receiveFormEvent);
}
// let contador = 0;
// function receiveFormEvent(e) {
// 	e.preventDefault();
// 	console.log(`Form foi enviado ${contador}`);
// 	contador++;
// }

// form.onsubmit = (e) => {
// 	e.preventDefault();
// 	alert(1);
// 	console.log("Foi enviado");
// };

Enviar();
