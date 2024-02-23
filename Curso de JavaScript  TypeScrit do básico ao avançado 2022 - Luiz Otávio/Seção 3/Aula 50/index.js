// ... rest, ... spread
// const num = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
// const [firstNum, secondNum, thirdNum, , fifthNum, , seventhNum, ...rest] = num;

// console.log(firstNum, secondNum, fifthNum, seventhNum);
// console.log(rest);

//      0         1        3
//    0 1 2     0 1 2    0 1 2

const num = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
];

const [list1, list2, list3] = num;

console.log(list2[2]);

// const [, [, , six]] = num;
// console.log(six);
