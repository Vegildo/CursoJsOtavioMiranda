// fetch("assets/json/pessoas.json")
// 	.then(response => response.json())
// 	.then(json => loadElPage(json));
// .catch(e => console.error(e));

axios("assets/json/pessoas.json")
	.then(resp => loadElPage(resp.data))
	.catch(e => console.error(e));

const loadElPage = json => {
	const table = document.createElement("table");
	for (let person of json) {
		const tr = document.createElement("tr");

		let td1 = document.createElement("td");
		td1.innerHTML = person.nome;
		tr.appendChild(td1);

		const td2 = document.createElement("td");
		td2.innerHTML = person.email;
		tr.appendChild(td2);

		const td3 = document.createElement("td");
		td3.innerHTML = person.idade;
		tr.appendChild(td3);

		// const td4 = document.createElement("td");
		// td4.innerHTML = person.salario;
		// tr.appendChild(td4);
		// console.log(person.nome);

		table.appendChild(tr);
	}

	const res = document.querySelector("#res");
	res.appendChild(table);
};
