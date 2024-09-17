/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_modal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../src/modal.js */ \"./src/modal.js\");\n\n(0,_src_modal_js__WEBPACK_IMPORTED_MODULE_0__.openModal)();\n(0,_src_modal_js__WEBPACK_IMPORTED_MODULE_0__.crear)();\n\n//# sourceURL=webpack://mibaro/./src/main.js?");

/***/ }),

/***/ "./src/modal.js":
/*!**********************!*\
  !*** ./src/modal.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   crear: () => (/* binding */ crear),\n/* harmony export */   openModal: () => (/* binding */ openModal)\n/* harmony export */ });\n// import supabase from \"./supabaseconfig.js\" \n\nfunction openModal() {\n  document.addEventListener(\"DOMContentLoaded\", function () {\n    var modal = document.getElementById(\"modal\");\n    var btnmostrarmodal = document.getElementById(\"mostrarmodal\");\n    var btncerrarmodal = document.getElementById(\"cerrarmodal\");\n    var body = document.getElementById(\"bodywindow\");\n    btnmostrarmodal.addEventListener(\"click\", function () {\n      modal.classList.remove(\"hidden\");\n      body.classList.add(\"blur-sm\");\n    });\n    btncerrarmodal.addEventListener(\"click\", function () {\n      modal.classList.add(\"hidden\");\n      body.classList.remove(\"blur-sm\");\n    });\n    window.addEventListener('click', function (event) {\n      if (event.target === modal) {\n        modal.classList.add('hidden');\n        body.classList.remove(\"blur-sm\");\n      }\n    });\n  });\n}\nfunction crear() {\n  var areaparacajas = document.getElementById(\"areaparacajas\");\n  var crearespacio = document.getElementById(\"crearespacio\"); //esto agarra el form id\n\n  crearespacio.addEventListener(\"submit\", function (event) {\n    var modal = document.getElementById(\"modal\");\n    var body = document.getElementById(\"bodywindow\");\n    body.classList.remove(\"blur-sm\");\n    modal.classList.add(\"hidden\");\n    event.preventDefault();\n    var crearnuevo = new FormData(event.target);\n    var nuevoObjeto = Object.fromEntries(crearnuevo);\n    var nuevoHtml = \"\\n        <div class=\\\"container-caja\\\">\\n            <div class=\\\"ml-6 mt-4 text-primary-verdeclaro\\\">\".concat(nuevoObjeto.nombreespacio, \"</div>\\n            <div class=\\\"ml-6 text-white\\\">baro en \").concat(nuevoObjeto.nombreplataforma, \":</div>\\n            <div class=\\\"ml-6 text-2xl mb-4 text-white\\\"> $ \").concat(nuevoObjeto.cantidadinicial, \"</div>\\n        </div>\\n    \");\n    areaparacajas.innerHTML += nuevoHtml;\n    crearespacio.reset();\n  });\n\n  // class CrearNuevoEspacio{\n  //     constructor(nombre, plataforma, cantidad, notas){\n  //         this.nombreEspacio = nombre\n  //         this.nombrePlataforma = plataforma\n  //         this.cantidadInicial = cantidad\n  //         this.notasAdicionales = notas\n  //     }    \n  // }\n\n  //     const nuevoHtml = `\n  //     <div class=\"container-caja\">\n  //         <div class=\"ml-6 mt-4 text-primary-verdeclaro\">${nombre}]$</div>\n  //         <div class=\"ml-6 text-white\">baro en ${plataforma}$:</div>\n  //         <div class=\"ml-6 text-2xl mb-4 text-white\"> $ ${cantidad}$</div>\n  //     </div>\n  // `;\n\n  // // Agrega el nuevo HTML al contenedor\n  //     areaparacajas.innerHTML = nuevoHtml;\n\n  // async function test (nombre,plataforma,cantidad,notas){\n  //     const nuevoespacio = new CrearNuevoEspacio(nombre,plataforma,cantidad,notas)\n\n  //     const { error } = await supabase\n  //         .from('espacios')\n  //         .insert({ id: 1, space_nombre: nuevoespacio.nombreEspacio})\n  //     if (error) {\n  //         console.error('Error inserting data:', error);\n  //     } else {\n  //         console.log('Data inserted successfully');\n  //     }\n  //\n}\n\n//# sourceURL=webpack://mibaro/./src/modal.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;