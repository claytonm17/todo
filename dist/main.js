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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_listManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/listManager.js */ \"./src/modules/listManager.js\");\n\n\nconst { toDoManager } = _modules_listManager_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n\ntoDoManager.addNewItem('Homework', 'Chemistry reading', 'Friday', 'Medium', false);\ntoDoManager.addNewItem('Meeting', 'Meet with execs', 'Monday', 'High', true);\n\ntoDoManager.changeProjectName('household');\ntoDoManager.addNewItem('Do the dishes', '', 'Today', 'Low', false);\ntoDoManager.addNewItem('Laundry', '', 'Today', 'Low', false);\ntoDoManager.addNewItem('Walk the dog', 'Be sure to bring treats!', 'Today', 'Medium', true);\n\ntoDoManager.changeProjectName('default');\ntoDoManager.addNewItem('Play video games', 'Minecraft or fortnite', 'Today', 'Low', false);\n\ntoDoManager.logList()\n\n//# sourceURL=webpack://09-todo/./src/index.js?");

/***/ }),

/***/ "./src/modules/listManager.js":
/*!************************************!*\
  !*** ./src/modules/listManager.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst toDoManager = (function () {\n\n    // Project name is default unless another list is chosen\n    let project = 'default'\n    function changeProjectName(name){\n        if (name !== undefined && name !== ''){\n            project = name;\n        }\n    }\n\n    class ToDoItem {\n        constructor(title, description, dueDate, priority, isComplete, project) {\n            this.title = title;\n            this.description = description;\n            this.dueDate = dueDate;\n            this.priority = priority;\n            this.isComplete = isComplete;\n            this.project = project;\n        }\n\n        log() {\n            console.log(`Title: ${this.title}`)\n            console.log(`Description: ${this.description}`)\n            console.log(`Due Date: ${this.dueDate}`)\n            console.log(`Priority: ${this.priority}`)\n            console.log(this.isComplete)\n            console.log(`Project: ${this.project}`)\n        }\n    }\n\n    const toDoList = []\n    \n    // By default the task is not complete and in the default project\n    function addNewItem(title, description, dueDate, priority, isComplete) {\n        const newItem = new ToDoItem(title, description, dueDate, priority, isComplete, project)  \n        toDoList.push(newItem);\n    }\n\n    function removeItem(index) {\n        index = index - 1; // To match task number\n        if (index >= 0 && index < toDoList.length) {\n            toDoList.splice(index, 1)\n        } else {\n            console.log('Invalid index')\n        }\n    }\n\n    function logList() {\n        for (let i = 0; i < toDoList.length; i++) {\n            console.log(`Task ${i + 1}`)\n            toDoList[i].log()\n            console.log('----------')\n        }\n    }\n\n    return {\n        addNewItem,\n        removeItem,\n        logList,\n        changeProjectName,\n    }\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    toDoManager,\n});\n\n//# sourceURL=webpack://09-todo/./src/modules/listManager.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;