// ? :

const userPoint = 999;
const userLevel = userPoint >= 1000 ? `Usuário VIP` : `Usuário normal`;

const userColor = `Black`;
const defaultColor = userColor || `white`;

console.log(userLevel, defaultColor);

// userPoint >= 1000 ? console.log(`Usuário VIP`) : console.log(`Usuário normal`);

// if (userPoint >= 1000) {
// 	console.log(`Usuário VIP`);
// } else {
// 	console.log(`Usuário normal`);
// }
