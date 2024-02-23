const dataDoVV = () => {
	//Data do dia
	const date = new Date();

	//função para pegar o dia da semana por extenso
	const getDayOfWeekText = (d) => {
		let weekDayText;

		switch (d.getDay()) {
			case 0:
				weekDayText = "Domingo";
				return weekDayText;
			case 1:
				weekDayText = "Segunda-Feira";
				return weekDayText;
			case 2:
				weekDayText = "Terça-Feira";
				return weekDayText;
			case 3:
				weekDayText = "Quarta-Feira";
				return weekDayText;
			case 4:
				weekDayText = "Quinta-Feira";
				return weekDayText;
			case 5:
				weekDayText = "Sexta-Feira";
				return weekDayText;
			case 6:
				weekDayText = "Sábado";
				return weekDayText;
			default:
				weekDayText = "ERROR! Por favor, Escolha uma data entre 0 e 6";
				return weekDayText;
		}
	};

	//função para pegar o mes do ano por extenso
	const getMonthOfYearText = (d) => {
		let yearMonthText;

		switch (d.getMonth() + 1) {
			case 1:
				yearMonthText = "Janeiro";
				return yearMonthText;
			case 2:
				yearMonthText = "Fevereiro";
				return yearMonthText;
			case 3:
				yearMonthText = "Março";
				return yearMonthText;
			case 4:
				yearMonthText = "Abril";
				return yearMonthText;
			case 5:
				yearMonthText = "Maio";
				return yearMonthText;
			case 6:
				yearMonthText = "Junho";
				return yearMonthText;
			case 7:
				yearMonthText = "Julho";
				return yearMonthText;
			case 8:
				yearMonthText = "Agosto";
				return yearMonthText;
			case 9:
				yearMonthText = "Setembro";
				return yearMonthText;
			case 10:
				yearMonthText = "Outubro";
				return yearMonthText;
			case 11:
				yearMonthText = "Novembro";
				return yearMonthText;
			case 12:
				yearMonthText = "Julho";
				return yearMonthText;

			default:
				yearMonthText = "ERROR! Por favor, Escolha uma data entre 0 e 6";
				return yearMonthText;
		}
	};

	//0 á esquerda

	const zeroOnTheLeft = (n) => {
		return n >= 10 ? n : `0${n}`;
	};

	//função pega a data, formata-a, retorna a resposta no DOM
	const dateGetAndFormat = (d, week, month, hour, min) => {
		const year = d.getFullYear();
		const day = d.getDate();

		const h1 = document.querySelector(".container h1");
		h1.innerHTML = `${week}, ${day} de ${month} de ${year}</br> ${hour}:${min}`;
	};

	// Chamada final com tudo formatado
	dateGetAndFormat(
		date,
		getDayOfWeekText(date),
		getMonthOfYearText(date),
		zeroOnTheLeft(date.getHours()),
		zeroOnTheLeft(date.getMinutes())
	);
};

//Chamada da função principal!
dataDoVV();
