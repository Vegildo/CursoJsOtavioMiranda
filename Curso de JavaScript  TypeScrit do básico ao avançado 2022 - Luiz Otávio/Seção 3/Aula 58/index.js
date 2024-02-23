const random = (min, max) => {
	//const r = Math.random() * (max - min) + min;
	//return  Math.floor(r);
	return Math.floor(Math.random() * (max - min) + min);
};

const min = 1;
const max = 60;
let rand = random(1, 60); //10

let i = 1;
let a = 1;

while (i <= 6) {
	rand = random(min, max);
	console.log(rand);
	i++;
}
console.log("----------------");
do {
	rand = random(min, max);
	console.log(rand);
	a++;
} while (a <= 6);

//const max2 = 60;
// while (rand !== 10) {
// 	rand = random(min, max2);
// 	console.log(rand);
// }
// console.log("----------------");
// do {
// 	rand = random(min, max2);
// 	console.log(rand);
// } while (rand !== 10);

//console.log(rand);

// const n = "LeoVV";
// let i = 0;

// while (i < n.length) {
// 	console.log(n[i]);
// 	i++;
// }
