const inputTask = document.getElementsByClassName("input-task")[0];
const btnTask = document.getElementsByClassName("btn-task")[0];
const task = document.getElementsByClassName("task")[0];

//const inputTask = document.querySelector(".input-task");const btnTask = document.querySelector(".btn-task");const task = document.querySelector(".task");

const createElement = (e) => {
	const element = document.createElement(e);
	return element;
};

inputTask.addEventListener("keydown", (event) => {
	//console.log("evento de teclar", event);
	//console.log("Propriedade do evento", event.keyCode);

	if (event.keyCode === 13) {
		//console.log("ENTER PRESSIONADO");
		if (!inputTask.value) return;
		createTask(inputTask.value);
	}
});

const cleanInput = () => {
	inputTask.value = "";
	inputTask.focus(); // comanda o js para fazr um vento de focus, sendo focus o o cursor estar no input piscando, como quando está apto para digitar
};

const createButtonDelete = (li) => {
	li.innerText += " ";
	const btnDelete = document.createElement("button");
	btnDelete.innerText = "Deletar";
	//btnDelete.classList.add('delete'); msm função q a linha de baixo
	btnDelete.setAttribute("class", "delete"); //cria um atributo class com o nome de delete.
	li.appendChild(btnDelete);
};

const createTask = (inputTxt) => {
	//console.log(inputTxt);
	const li = createElement("li");
	//console.log(li);
	li.innerText = inputTxt;
	task.appendChild(li);
	cleanInput();
	createButtonDelete(li);
	saveTask();
};

btnTask.addEventListener("click", () => {
	if (!inputTask.value) return;
	//console.log(inputTask.value);
	createTask(inputTask.value);
});

document.addEventListener("click", (e) => {
	const element = e.target;
	if (element.classList.contains("delete")) {
		//console.log("apagar clicado");
		//console.log(element.parentElement);
		element.parentElement.remove();
		saveTask();
	}
});

const saveTask = () => {
	const liTask = task.querySelectorAll("li");
	//console.log(liTask);

	const listOfTask = [];
	for (let t of liTask) {
		// t de task
		//console.log(t.innerText);
		let taskTxt = t.innerText;
		taskTxt = taskTxt.replace("Deletar", "").trim();
		//console.log(taskTxt);
		listOfTask.push(taskTxt);
	}
	//console.log(listOfTask);

	const taskJSON = JSON.stringify(listOfTask);
	//console.log(taskJSON);
	localStorage.setItem("tasks", taskJSON);
};

const addSaveTask = () => {
	const tasks = localStorage.getItem("tasks");
	//console.log(tasks);
	const listOfTask = JSON.parse(tasks);
	//console.log(listOfTask);

	for (let t of tasks) {
		// t de task
		createTask(t);
	}
};
addSaveTask();
