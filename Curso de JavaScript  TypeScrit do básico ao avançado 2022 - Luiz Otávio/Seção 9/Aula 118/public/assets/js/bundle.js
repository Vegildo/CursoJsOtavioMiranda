/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modulo1.js":
/*!************************!*\
  !*** ./src/modulo1.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "idade": () => (/* binding */ idade),
/* harmony export */   "nome": () => (/* binding */ nome),
/* harmony export */   "sobrenome": () => (/* binding */ sobrenome),
/* harmony export */   "soma": () => (/* binding */ soma)
/* harmony export */ });
var nome = "Leonardo";
var sobrenome = "Braga";
var idade = 33;
var cpf = "549.991.407-99";
function soma(a, b) {
  return a + b;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (a, b) {
  return a * b;
});

// export default function soma(a, b) {
// 	return a + b;
// }

// export { nome as default, sobrenome, idade, soma };

//export const nome = "Leonardo";
//export const sobrenome = "Braga";
//export const idade = 33;
//export const cpf = "549.991.407-99";

// function soma(a, b) {
// 	return a + b;
// }

// export default class Pessoa {
// 	constructor(nome, sobrenome) {
// 		this.nome = nome;
// 		this.sobrenome = sobrenome;
// 	}
// }

// export { nome as nomeMeu, sobrenome as qualquerNome, idade, soma };

// export { nome, sobrenome, idade, soma };

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modulo1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modulo1 */ "./src/modulo1.js");

console.log((0,_modulo1__WEBPACK_IMPORTED_MODULE_0__["default"])(2, 2));
console.log(_modulo1__WEBPACK_IMPORTED_MODULE_0__.nome, _modulo1__WEBPACK_IMPORTED_MODULE_0__.sobrenome, (0,_modulo1__WEBPACK_IMPORTED_MODULE_0__.soma)(_modulo1__WEBPACK_IMPORTED_MODULE_0__.idade, 10));

// import qualquerNome from "./modulo1";

// console.log(qualquerNome(5, 5));

// import * as MeuModulo from "./modulo1";

// const { nome, sobrenome } = MeuModulo;

// console.log(MeuModulo);

// console.log(nome, sobrenome);

// import {
// 	nome,
// 	sobrenome,
// 	idade,
// 	soma,
// 	Pessoa as OutroNomePraClass,
// } from "./modulo1";

// const p1 = new OutroNomePraClass(nome, sobrenome);

// const p1 = new Pessoa(nome, sobrenome);

// console.log(nome, sobrenome, soma(idade, 10), p1);

// import { nomeMeu, qualquerNome, idade, soma } from "./modulo1";

// console.log(nomeMeu, qualquerNome, soma(idade, 10));

// import {
// 	nome as nomeMeu,
// 	sobrenome as qualquerNome,
// 	idade,
// 	soma,
// } from "./modulo1";

// const nome = "Bruna";

// console.log(nome, nomeMeu, qualquerNome, soma(idade, 10));

// alert("Olá worldzada");
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map