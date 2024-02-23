//switch/case em uma função

const getDayOfWeekText = (d) => {
	let weekDayText;

	switch (weekDay) {
		case 0:
			weekDayText = "Domingo";
			return weekDayText;
		case 1:
			weekDayText = "Segunda";
			return weekDayText;
		case 2:
			weekDayText = "Terça";
			return weekDayText;
		case 3:
			weekDayText = "Quarta";
			return weekDayText;
		case 4:
			weekDayText = "Quinta";
			return weekDayText;
		case 5:
			weekDayText = "Sexta";
			return weekDayText;
		case 6:
			weekDayText = "Sábado";
			return weekDayText;
		default:
			weekDayText = "ERROR! Por favor, Escolha uma data entre 0 e 6";
	}
};

const date = new Date(); //"1989-10-12 08:03:05");
const weekDay = date.getDay();

const weekDayText = getDayOfWeekText(weekDay);

console.log(weekDay, weekDayText);

// switch/case
// switch (weekDay) {
// 	case 0:
// 		weekDayText = "Domingo";
// 		break;
// 	case 1:
// 		weekDayText = "Segunda";
// 		break;
// 	case 2:
// 		weekDayText = "Terça";
// 		break;
// 	case 3:
// 		weekDayText = "Quarta";
// 		break;
// 	case 4:
// 		weekDayText = "Quinta";
// 		break;
// 	case 5:
// 		weekDayText = "Sexta";
// 		break;
// 	case 6:
// 		weekDayText = "Sábado";
// 		break;
// 	default:
// 		weekDayText = "ERROR! Por favor, Escolha uma data entre 0 e 6";
// }

//console.log(weekDay, weekDayText);
// if (weekDay === 0) {
// 	weekDayText = "Domingo";
// } else if (weekDay === 1) {
// 	weekDayText = "Segunda";
// } else if (weekDay === 2) {
// 	weekDayText = "Terça";
// } else if (weekDay === 3) {
// 	weekDayText = "Quarta";
// } else if (weekDay === 4) {
// 	weekDayText = "Quinta";
// } else if (weekDay === 5) {
// 	weekDayText = "Sexta";
// } else if (weekDay === 6) {
// 	weekDayText = "Sábado";
// } else {
//     weekDayText = "ERROR! Por favor, Escolha uma data entre 0 e 6"
// }
