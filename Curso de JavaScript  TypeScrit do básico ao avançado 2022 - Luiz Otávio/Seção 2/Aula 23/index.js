let varA = "A"; //B
let varB = "B"; //C
let varC = "C"; //A
let varAOld;

// Mina resposta:
//varAOld = varA;
// varA = varB;
// varB = varC;
// varC = varAOld;

//Professor:
[varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC);
