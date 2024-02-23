const fizzbuzz = (n) => {
	if (!isNaN(n)) {
		if (n >= 0 && n <= 100) {
			if (n % 3 === 0 && n % 5 === 0) return "Fizz Buzz";
			if (n % 3 === 0) return "Fizz";
			if (n % 5 === 0) return "Buzz";
			//return n;
		}
		return "ERROR! Por favor, escolha um número entre 0 e 100.";
	}
	return "ERROR! Escolha um número.";
};

const num = 100000;

console.log(fizzbuzz(num));
