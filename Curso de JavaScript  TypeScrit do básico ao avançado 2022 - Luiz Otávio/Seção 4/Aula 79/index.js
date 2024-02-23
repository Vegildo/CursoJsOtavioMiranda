const recursiva = (max) => {
	if (max >= 12) return;
	max++;
	console.log(max);
	recursiva(max);
};

recursiva(-1);
