//Imaginem q eu prciso ed um código em ordem, chamar f1, f2, f3 e o texto "olá mundo!" respectivamente

// const random = (min = 1000, max = 3000) => {
// 	const num = Math.random() * (max - min) + min;
// 	return Math.floor(num);
// };
// //console.log(random());

// function f1() {
// 	setTimeout(() => {
// 		console.log("f1");
// 	}, random());
// }

// function f2() {
// 	setTimeout(() => {
// 		console.log("f2");
// 	}, random());
// }

// function f3() {
// 	setTimeout(() => {
// 		console.log("f3");
// 	}, random());
// }

// f1();
// f2();
// f3();
// console.log("Olá Mundo!");

//-----------------------------------------------

//Como resolver esse problema?

//Usando Func de Callbacks

const random = (min = 1000, max = 3000) => {
	const num = Math.random() * (max - min) + min;
	return Math.floor(num);
};
//console.log(random());

function f1(callback) {
	setTimeout(() => {
		console.log("f1");
		if (callback) callback();
	}, random());
}

function f2(callback) {
	setTimeout(() => {
		console.log("f2");
		if (callback) callback();
	}, random());
}

function f3(callback) {
	setTimeout(() => {
		console.log("f3");
		if (callback) callback();
	}, random());
}

// f1(() => {
// 	f2(() => {
// 		f3(() => {
// 			console.log("Olá Mundo!");
// 		});
// 	});
// });

const f1Callback = () => {
	f2(f2Callback);
};

const f2Callback = () => {
	f3(f3Callback);
};

const f3Callback = () => {
	console.log("Olá Mundo!");
};

f1(f1Callback);
//Problema resolvido!
