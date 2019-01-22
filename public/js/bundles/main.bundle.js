/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./public/js/controller.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./public/js/controller.js":
/*!*********************************!*\
  !*** ./public/js/controller.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models_model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/model.js */ \"./public/js/models/model.js\");\n/* harmony import */ var _views_view_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/view.js */ \"./public/js/views/view.js\");\n/* harmony import */ var _state_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state.js */ \"./public/js/state.js\");\n/* harmony import */ var _elements_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./elements.js */ \"./public/js/elements.js\");\n/* harmony import */ var _terminal_terminalInstance__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./terminal/terminalInstance */ \"./public/js/terminal/terminalInstance.js\");\n/* harmony import */ var _terminal_terminalRoutes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./terminal/terminalRoutes */ \"./public/js/terminal/terminalRoutes.js\");\n// modifying file for test purposes \n\n\n\n\n\n\n\n///// CONTROLLER MODULE /////\nconst CTRL = (function(MDL, VIEW, state, elements) {\n\n    const initializePages = () => {\n        VIEW.appendAboutMeResponse();\n    };\n\n    const handleTerminalSubmit = () => {\n        if(state.inputWaiting.isTrue) {\n            _terminal_terminalInstance__WEBPACK_IMPORTED_MODULE_4__[\"terminal\"].emitEvent(`${state.inputWaiting.getEvent()} ${elements.terminalInput.value}`);\n            elements.terminalInput.value = \"\";\n    \n        } else {\n            const input = elements.terminalInput.value;\n            _terminal_terminalInstance__WEBPACK_IMPORTED_MODULE_4__[\"terminal\"].emitEvent(input);\n            elements.terminalInput.value = \"\";\n        }\n    };\n\n    return {\n        initializePages,\n        handleTerminalSubmit,\n    };\n} (_models_model_js__WEBPACK_IMPORTED_MODULE_0__[\"MDL\"], _views_view_js__WEBPACK_IMPORTED_MODULE_1__[\"VIEW\"], _state_js__WEBPACK_IMPORTED_MODULE_2__[\"state\"], _elements_js__WEBPACK_IMPORTED_MODULE_3__[\"elements\"]) );\n\n\n\n///// EXECUTION & LISTENERS /////\nObject(_terminal_terminalRoutes__WEBPACK_IMPORTED_MODULE_5__[\"initTerminalRoutes\"])(_terminal_terminalInstance__WEBPACK_IMPORTED_MODULE_4__[\"terminal\"]);\nCTRL.initializePages();\n\n/// terminal input submission handling\n_elements_js__WEBPACK_IMPORTED_MODULE_3__[\"elements\"].terminalForm.addEventListener(\"submit\", (event) => {\n    event.preventDefault();\n    CTRL.handleTerminalSubmit();\n});\n\n// when terminal display is clicked, focus on terminal input\n_elements_js__WEBPACK_IMPORTED_MODULE_3__[\"elements\"].terminalDisplay.addEventListener(\"click\", (event) => {\n    _elements_js__WEBPACK_IMPORTED_MODULE_3__[\"elements\"].terminalInput.focus();\n});\n\n// terminal toggling up/down when get-in-touch button is clicked\n_elements_js__WEBPACK_IMPORTED_MODULE_3__[\"elements\"].getInTouch.addEventListener(\"click\", (event) => {\n    _elements_js__WEBPACK_IMPORTED_MODULE_3__[\"elements\"].terminalBlock.classList.toggle(\"terminal-toggle-up\");\n    if(document.querySelector(\".terminal-toggle-up\")) _elements_js__WEBPACK_IMPORTED_MODULE_3__[\"elements\"].terminalInput.focus();\n});\n\n\n//# sourceURL=webpack:///./public/js/controller.js?");

/***/ }),

/***/ "./public/js/elements.js":
/*!*******************************!*\
  !*** ./public/js/elements.js ***!
  \*******************************/
/*! exports provided: elements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"elements\", function() { return elements; });\n\nconst elements = {\n    aboutMeResponse: document.querySelector(\".question__response\"),\n    getInTouch: document.querySelector(\".get-in-touch\"),\n\n    terminalBlock: document.querySelector(\".terminal\"),\n    terminalForm: document.querySelector(\".terminal__input-container\"),\n    terminalInput: document.querySelector(\".terminal__input\"),\n    terminalDisplay: document.querySelector(\".terminal__display\"),\n\n};\n\n\n\n//# sourceURL=webpack:///./public/js/elements.js?");

/***/ }),

/***/ "./public/js/models/model.js":
/*!***********************************!*\
  !*** ./public/js/models/model.js ***!
  \***********************************/
/*! exports provided: MDL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MDL\", function() { return MDL; });\n\n\nconst MDL = { \n\n};\n\n\n\n\n//# sourceURL=webpack:///./public/js/models/model.js?");

/***/ }),

/***/ "./public/js/state.js":
/*!****************************!*\
  !*** ./public/js/state.js ***!
  \****************************/
/*! exports provided: state */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"state\", function() { return state; });\n\nconst state = {\n    command: null,\n    argument: null,\n    value: null,\n\n    userName: null,\n    userEmail: null,\n    userMessage: null,\n\n    inputWaiting: {\n        event: null,\n        isTrue: false,\n        getEvent: function() {\n            return this.event;\n        },\n        setEvent: function(commandAndArgument) {\n            this.event = commandAndArgument;\n            this.isTrue = true;\n        },\n        reset: function() {\n            this.event = null;\n            this.isTrue = false;\n        }\n    }\n\n};\n\n\n\n//# sourceURL=webpack:///./public/js/state.js?");

/***/ }),

/***/ "./public/js/terminal/routes/ask/_askRoutes.js":
/*!*****************************************************!*\
  !*** ./public/js/terminal/routes/ask/_askRoutes.js ***!
  \*****************************************************/
/*! exports provided: askRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"askRoutes\", function() { return askRoutes; });\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../elements */ \"./public/js/elements.js\");\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../state */ \"./public/js/state.js\");\n/* harmony import */ var _terminalUtilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../terminalUtilities */ \"./public/js/terminal/terminalUtilities.js\");\n\n\n\n\n///// FUNCTIONS /////\nconst askGrewUp = (event) => {\n    Object(_terminalUtilities__WEBPACK_IMPORTED_MODULE_2__[\"UTIL\"])()\n        .createManyPs(\n            ' ',\n            'Where did you grow up?',\n            'I grew up in in Browns Mills, NJ, until I was 23 years old. It\\'s a small town',\n            'in the middle of the pine barrens (a massive forest of pine trees). You could drive',\n            'to the beach in 40 minutes, and get to Philadelphia in an hour. Browns Mills is cozy,', 'but you won\\'t find much opportunity there.')\n        .mapClasses(\"purple\")\n        .asyncAppendArr(_elements__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].terminalDisplay);\n};\n\nconst askAge = (event) => {\n    Object(_terminalUtilities__WEBPACK_IMPORTED_MODULE_2__[\"UTIL\"])()\n    .createManyPs(\n        ' ',\n        'How old am I?',\n        \"I'm 25 years old as of January 14th. I know.. I'm getting old right?\")\n    .mapClasses(\"purple\")\n    .asyncAppendArr(_elements__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].terminalDisplay);\n};\n\nconst askCoding = (event) => {\n    Object(_terminalUtilities__WEBPACK_IMPORTED_MODULE_2__[\"UTIL\"])()\n    .createManyPs(\n        ' ',\n        'How did I start coding?',\n        'I first learned what programming was all about from Khan Academy. I had used',\n        'their website as a mathematics reference, but I randomly stumbled upon their',\n        'Javascript section. From there I studied Javascript for a year and a half on Udemy',\n        '(and I bought hundreds of dolars of courses), but I could only learn so quickly',\n        'with a full time job. I made the decision to study at DevPoint Labs with the',\n        'University of Utah, and now I am looking to be hired.')\n    .mapClasses(\"purple\")\n    .asyncAppendArr(_elements__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].terminalDisplay);\n};\n\nconst askMove = (event) => {\n    Object(_terminalUtilities__WEBPACK_IMPORTED_MODULE_2__[\"UTIL\"])()\n    .createManyPs(\n        ' ',\n        'Why did I move to Salt Lake City?',\n        'I moved to Utah in May of 2017, and I\\'m really enjoying my time here. In New Jersey',\n        'I didn\\'nt really have the money to afford an education, but the colleges are much',\n        'cheaper in Salt Lake City, and they have great programs in computer science,',\n        'economics, and statistics, all of which I\\'m interested in. Salt Lake City also',\n        'has a lot of hospitals, and having been a hospital pharmacy tech, I knew it would',\n        'be easy to find a job when I arrived. This city is my best chance at being successful',\n        'academically, professionally, and financially. It also happens to be one of the most',\n        'beautiful places I have ever seen.')\n    .mapClasses(\"purple\")\n    .asyncAppendArr(_elements__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].terminalDisplay);\n};\n\n\n///// ROUTES /////\nconst askRoutes = (terminal) => {\n    //grew up\n    terminal.addListener(\"ask --grew-up\", askGrewUp);\n    terminal.addListener(\"ask grew-up\", askGrewUp);\n    terminal.addListener(\"ask grewup\", askGrewUp);\n    terminal.addListener(\"ask -gu\", askGrewUp);\n\n    //age\n    terminal.addListener(\"ask --age\", askAge);\n    terminal.addListener(\"ask age\", askAge);\n    terminal.addListener(\"ask -a\", askAge);\n\n    //coding\n    terminal.addListener(\"ask --coding\", askCoding);\n    terminal.addListener(\"ask coding\", askCoding);\n    terminal.addListener(\"ask -c\", askCoding);\n\n    //move\n    terminal.addListener(\"ask --move\", askMove);\n    terminal.addListener(\"ask move\", askMove);\n    terminal.addListener(\"ask -m\", askMove);\n\n};\n\n\n\n\n//# sourceURL=webpack:///./public/js/terminal/routes/ask/_askRoutes.js?");

/***/ }),

/***/ "./public/js/terminal/routes/help/_helpRoutes.js":
/*!*******************************************************!*\
  !*** ./public/js/terminal/routes/help/_helpRoutes.js ***!
  \*******************************************************/
/*! exports provided: helpRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"helpRoutes\", function() { return helpRoutes; });\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../elements */ \"./public/js/elements.js\");\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../state */ \"./public/js/state.js\");\n/* harmony import */ var _terminalUtilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../terminalUtilities */ \"./public/js/terminal/terminalUtilities.js\");\n\n\n\n\n///// FUNCITONS /////\nconst help = (event) => {\n    Object(_terminalUtilities__WEBPACK_IMPORTED_MODULE_2__[\"UTIL\"])()\n    .createManyPs(\n        ' ',\n        ':*:*:*: HELP SECTION :*:*:*:',\n        ' ',\n        'DOCUMENTATION',\n        ' ',\n        `help           -----> basic help command. Type me when you need to know something`,\n        'help --please  -----> what a nice way of asking. thank you..',\n        ' ',\n        'set  --name <name>        -----> sets your name for when you want to send a mesage',\n        'set  --email <email>      -----> sets your email for when you want to send a mesage',\n        'set  --message <message>  -----> sets a message to be sent with your name and email',\n        ' ',\n        'send --message  -----> after setting name/email and message parameters, this command',\n        '                       will send the message and your information to my database',\n        '                       where I can view it privately',\n        ' ',\n        'GENERAL INSTRUCTIONS',\n        ' ',\n        'FIRST:    use \"set --name\", \"set --email\", and \"set --message\",',\n        '          to prepare your message to be sent',\n        ' ',\n        'SECOND:   use \"send --message\" to review your information, and enter yes to send',\n        ' ')\n    .asyncAppendArr(_elements__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].terminalDisplay);\n};\n\n\nconst helpPlease = (event) => {\n    Object(_terminalUtilities__WEBPACK_IMPORTED_MODULE_2__[\"UTIL\"])().createAppendP(\n        _elements__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].terminalDisplay, \n        \"Look at you, being polite and using your manners...\"\n    );\n};\n\n\n///// ROUTES /////\nconst helpRoutes = function(terminal) {\n\n    //help\n    terminal.addListener(\"help\", help);\n    terminal.addListener(\"--help\", help);\n    terminal.addListener(\"-help\", help);\n    terminal.addListener(\"-h\", help);\n\n    //help please\n    terminal.addListener(\"help --please\", helpPlease);\n\n};\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./public/js/terminal/routes/help/_helpRoutes.js?");

/***/ }),

/***/ "./public/js/terminal/routes/send/_sendRoutes.js":
/*!*******************************************************!*\
  !*** ./public/js/terminal/routes/send/_sendRoutes.js ***!
  \*******************************************************/
/*! exports provided: sendRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sendRoutes\", function() { return sendRoutes; });\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../elements */ \"./public/js/elements.js\");\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../state */ \"./public/js/state.js\");\n/* harmony import */ var _terminalUtilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../terminalUtilities */ \"./public/js/terminal/terminalUtilities.js\");\n\n\n\n\n///// FUNCTIONS /////\nconst sendMessage = (event) => {\n    if(_state__WEBPACK_IMPORTED_MODULE_1__[\"state\"].inputWaiting.isTrue === false) {\n\n        if( (_state__WEBPACK_IMPORTED_MODULE_1__[\"state\"].userName !== null && _state__WEBPACK_IMPORTED_MODULE_1__[\"state\"].userMessage !== null) \n          ||(_state__WEBPACK_IMPORTED_MODULE_1__[\"state\"].userEmail !== null && _state__WEBPACK_IMPORTED_MODULE_1__[\"state\"].userMessage !== null)) {\n\n            Object(_terminalUtilities__WEBPACK_IMPORTED_MODULE_2__[\"UTIL\"])()\n            .createManyPs(\n                `Name: ${_state__WEBPACK_IMPORTED_MODULE_1__[\"state\"].userName? _state__WEBPACK_IMPORTED_MODULE_1__[\"state\"].userName: \"none\"}`,\n                `Email: ${_state__WEBPACK_IMPORTED_MODULE_1__[\"state\"].userEmail? _state__WEBPACK_IMPORTED_MODULE_1__[\"state\"].userEmail: \"none\"}`,\n                `Message: ${_state__WEBPACK_IMPORTED_MODULE_1__[\"state\"].userMessage? _state__WEBPACK_IMPORTED_MODULE_1__[\"state\"].userMessage: \"none\"}`,\n                ' ',\n                `Would you like to send a message with these details? (yes/no)`)\n            .asyncAppendArr(_elements__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].terminalDisplay);\n\n            _state__WEBPACK_IMPORTED_MODULE_1__[\"state\"].inputWaiting.setEvent(\"send --message\");\n\n        } else {\n            Object(_terminalUtilities__WEBPACK_IMPORTED_MODULE_2__[\"UTIL\"])()\n            .createManyPs(\n                `Name: ${_state__WEBPACK_IMPORTED_MODULE_1__[\"state\"].userName? _state__WEBPACK_IMPORTED_MODULE_1__[\"state\"].userName: \"none\"}`,\n                `Email: ${_state__WEBPACK_IMPORTED_MODULE_1__[\"state\"].userEmail? _state__WEBPACK_IMPORTED_MODULE_1__[\"state\"].userEmail: \"none\"}`,\n                `Message: ${_state__WEBPACK_IMPORTED_MODULE_1__[\"state\"].userMessage? _state__WEBPACK_IMPORTED_MODULE_1__[\"state\"].userMessage: \"none\"}`,\n                ' ',\n                `I'm sorry, but you need at least a name or email, and a message`)\n            .asyncAppendArr(_elements__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].terminalDisplay);\n        }\n\n\n    } else { \n        if(event.value === \"yes\") {\n            Object(_terminalUtilities__WEBPACK_IMPORTED_MODULE_2__[\"UTIL\"])().createAppendP(\n                _elements__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].terminalDisplay,\n                \"!!!!!  Message Sent  !!!!!\",\n                \"green\"\n            );\n            _state__WEBPACK_IMPORTED_MODULE_1__[\"state\"].inputWaiting.reset();\n\n        } else if(event.value === \"no\") {\n            Object(_terminalUtilities__WEBPACK_IMPORTED_MODULE_2__[\"UTIL\"])().createAppendP(\n                _elements__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].terminalDisplay,\n                \"Message Not Sent\"\n            );\n            _state__WEBPACK_IMPORTED_MODULE_1__[\"state\"].inputWaiting.reset();\n\n        } else {\n            Object(_terminalUtilities__WEBPACK_IMPORTED_MODULE_2__[\"UTIL\"])().createAppendP(\n                _elements__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].terminalDisplay,\n                'Sorry, please enter yes or no'\n            );\n        }\n    } \n};\n\n///// ROUTES /////\n\nconst sendRoutes = (terminal) => {\n    //send message\n    terminal.addListener(\"send --message\", sendMessage);\n    terminal.addListener(\"send message\", sendMessage);\n    terminal.addListener(\"send -m\", sendMessage);\n};\n\n\n\n//# sourceURL=webpack:///./public/js/terminal/routes/send/_sendRoutes.js?");

/***/ }),

/***/ "./public/js/terminal/routes/set/_setRoutes.js":
/*!*****************************************************!*\
  !*** ./public/js/terminal/routes/set/_setRoutes.js ***!
  \*****************************************************/
/*! exports provided: setRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setRoutes\", function() { return setRoutes; });\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../elements */ \"./public/js/elements.js\");\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../state */ \"./public/js/state.js\");\n/* harmony import */ var _terminalUtilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../terminalUtilities */ \"./public/js/terminal/terminalUtilities.js\");\n\n\n\n\n///// FUNCTION /////\nconst setEmail = (event) => {\n    const email = event.value;\n    _state__WEBPACK_IMPORTED_MODULE_1__[\"state\"].userEmail = email;\n\n    Object(_terminalUtilities__WEBPACK_IMPORTED_MODULE_2__[\"UTIL\"])().createAppendP(\n        _elements__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].terminalDisplay,\n        `Email Set Successfully: ${email}`,\n        \"green\"\n    );\n};\n\nconst setName = (event) => {\n    const name = event.value;\n    _state__WEBPACK_IMPORTED_MODULE_1__[\"state\"].userName = name;\n\n    Object(_terminalUtilities__WEBPACK_IMPORTED_MODULE_2__[\"UTIL\"])().createAppendP(\n        _elements__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].terminalDisplay,\n        `Name Set Successfully: ${name}`,\n        \"green\"\n    );\n};\n\nconst setMessage = (event) => {\n    const message = event.value;\n    _state__WEBPACK_IMPORTED_MODULE_1__[\"state\"].userMessage = message;\n\n    Object(_terminalUtilities__WEBPACK_IMPORTED_MODULE_2__[\"UTIL\"])().createAppendP(\n        _elements__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].terminalDisplay,\n        `Message Set Successfully: ${message}`,\n        \"green\"\n    );\n};\n\n///// ROUTES /////\n\n\n\nconst setRoutes = (terminal) => {\n    \n    //set email\n    terminal.addListener(\"set --email\", setEmail);\n    terminal.addListener(\"set email\", setEmail);\n    terminal.addListener(\"set -e\", setEmail);\n    \n    //set name\n    terminal.addListener(\"set --name\", setName);\n    terminal.addListener(\"set name\", setName);\n    terminal.addListener(\"set -n\", setName);\n\n    //set message\n    terminal.addListener(\"set --message\", setMessage);\n    terminal.addListener(\"set message\", setMessage);\n    terminal.addListener(\"set -m\", setMessage);\n\n};\n\n\n\n\n//# sourceURL=webpack:///./public/js/terminal/routes/set/_setRoutes.js?");

/***/ }),

/***/ "./public/js/terminal/terminalInstance.js":
/*!************************************************!*\
  !*** ./public/js/terminal/terminalInstance.js ***!
  \************************************************/
/*! exports provided: terminal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"terminal\", function() { return terminal; });\n/* harmony import */ var _terminalRoutes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./terminalRoutes */ \"./public/js/terminal/terminalRoutes.js\");\n\n\n\n///// A KEY POINT TO REMEMBER /////\n// Two inputs first will be read as a command and an argument, not a command and a value.\n// If you want a value to be read, there must be an argument.\n\n\nconst createTerminal = () => {\n\n    const parseEvent = (event) => {\n        const eventArrItems = event.split(\" \");\n        let command, argument, value;\n\n        if (eventArrItems.length === 1) {\n            command = eventArrItems[0];\n            argument = null;\n            value = null;\n        } else if (eventArrItems.length <= 2) {\n            command = eventArrItems[0];\n            argument = eventArrItems[1];\n            value = null;\n        } \n        else {\n            command = eventArrItems[0];\n            argument = eventArrItems[1];\n            value = eventArrItems.slice(2).join(\" \");\n        }\n\n        return {\n            command,\n            argument,\n            value,\n        }\n    };\n\n\n\n    const trimValue = (value) => {\n\n        if (value.charAt(0) === \"'\" || value.charAt(0) === \"\\\"\" ) {\n            value = value.slice(1);\n        } \n        if (value.charAt(value.length - 1) === \"\\\"\" || value.charAt(value.length - 1) ===  \"'\"){\n            value = value.slice(0, value.length - 1);\n        } \n        return value;\n    };\n    \n    \n\n    class Terminal extends EventTarget {\n        constructor() {\n            super();\n        }\n\n        emitEvent(event) {\n            let {command, argument, value} = parseEvent(event);\n            let eventObj;\n\n            if(value) value = trimValue(value);\n\n            if(argument) {\n                eventObj = new Event(`${command} ${argument}`);\n            } else {\n                eventObj = new Event(command);\n            }\n            \n            eventObj.command = command;\n            eventObj.argument = argument;\n            eventObj.value = value;\n\n            // console.log(eventObj)\n\n            this.dispatchEvent(eventObj);\n        }\n\n        addListener(commandAndArgument, ...callbackArr) {\n            // console.log(commandAndArgument)\n            // console.log(`${callbackArr}`);\n            this.addEventListener(commandAndArgument, (event) => {\n                callbackArr.forEach((item) => {\n                    item.call(this, event);\n                });\n            });\n        }      \n    }\n\n    const terminal = new Terminal();\n    return terminal;\n};\n\nconst terminal = createTerminal();\n\n\n\n\n\n\n//# sourceURL=webpack:///./public/js/terminal/terminalInstance.js?");

/***/ }),

/***/ "./public/js/terminal/terminalRoutes.js":
/*!**********************************************!*\
  !*** ./public/js/terminal/terminalRoutes.js ***!
  \**********************************************/
/*! exports provided: initTerminalRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initTerminalRoutes\", function() { return initTerminalRoutes; });\n/* harmony import */ var _routes_help_helpRoutes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routes/help/_helpRoutes */ \"./public/js/terminal/routes/help/_helpRoutes.js\");\n/* harmony import */ var _routes_set_setRoutes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes/set/_setRoutes */ \"./public/js/terminal/routes/set/_setRoutes.js\");\n/* harmony import */ var _routes_send_sendRoutes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes/send/_sendRoutes */ \"./public/js/terminal/routes/send/_sendRoutes.js\");\n/* harmony import */ var _routes_ask_askRoutes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes/ask/_askRoutes */ \"./public/js/terminal/routes/ask/_askRoutes.js\");\n\n \n \n \n\nconst initTerminalRoutes = (terminal) => {\n    Object(_routes_help_helpRoutes__WEBPACK_IMPORTED_MODULE_0__[\"helpRoutes\"])(terminal);\n    Object(_routes_set_setRoutes__WEBPACK_IMPORTED_MODULE_1__[\"setRoutes\"])(terminal);\n    Object(_routes_send_sendRoutes__WEBPACK_IMPORTED_MODULE_2__[\"sendRoutes\"])(terminal);\n    Object(_routes_ask_askRoutes__WEBPACK_IMPORTED_MODULE_3__[\"askRoutes\"])(terminal);\n};\n\n\n\n\n//# sourceURL=webpack:///./public/js/terminal/terminalRoutes.js?");

/***/ }),

/***/ "./public/js/terminal/terminalUtilities.js":
/*!*************************************************!*\
  !*** ./public/js/terminal/terminalUtilities.js ***!
  \*************************************************/
/*! exports provided: UTIL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UTIL\", function() { return UTIL; });\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../elements */ \"./public/js/elements.js\");\n\n\n\nconst UTIL = function(nodeArr) {\n\n    const updateScroll = (element) => {\n        element.scrollTop = element.scrollHeight;\n    };\n\n    const createAppendP = (parentNode, text, ...classes) => {\n        let node = document.createElement(\"p\");\n        node.textContent = text;\n\n        if(classes.length > 0) classes.forEach((item) => node.classList.add(item));\n\n        parentNode.appendChild(node);\n        updateScroll(_elements__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].terminalDisplay);\n    };\n\n\n    ///// CODE THAT CHAINS STARTS HERE /////\n    const createManyPs = ( ...text) => {\n        const newArr = text.map((item, index, arr) => {\n            let node = document.createElement(\"p\");\n            node.textContent = item;\n            return node;\n        });\n\n        return UTIL(newArr);\n    };\n\n    const mapClasses = (...classes) => {\n        const newArr = nodeArr.map((nodeItem, index, arr) => {\n            classes.forEach((classItem) => {\n                nodeItem.classList.add(classItem);\n            });\n            return nodeItem;\n        });\n        return UTIL(newArr);\n    };\n\n    const asyncAppendArr = (parentNode, delay = 30) => {\n        return new Promise((resolve, reject) => {\n            if(parentNode !== null) {\n                \n                const timeoutAppend = () => {\n                    setTimeout(() => {\n                        if(nodeArr[0] !== undefined) {\n                            parentNode.appendChild(nodeArr[0]);\n                            nodeArr.shift();\n                            updateScroll(parentNode);\n                            timeoutAppend(nodeArr[0]);\n                        }\n                    }, delay);\n                };\n                timeoutAppend(nodeArr);\n                resolve(\"Success\");\n            }\n                resolve(\"Parent Node Not Found\");\n        });\n    };\n\n    return {\n        updateScroll,\n        createAppendP,\n\n        createManyPs,\n        asyncAppendArr,\n        mapClasses,\n    };\n};\n\n\n\n\n//# sourceURL=webpack:///./public/js/terminal/terminalUtilities.js?");

/***/ }),

/***/ "./public/js/views/view.js":
/*!*********************************!*\
  !*** ./public/js/views/view.js ***!
  \*********************************/
/*! exports provided: VIEW */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"VIEW\", function() { return VIEW; });\n/* harmony import */ var _models_model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/model.js */ \"./public/js/models/model.js\");\n/* harmony import */ var _state_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state.js */ \"./public/js/state.js\");\n/* harmony import */ var _elements_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../elements.js */ \"./public/js/elements.js\");\n\n\n\n\nconst aboutMeText = \"I lived in Browns Mills, New Jersey up until May of 2017, and moved to Salt Lake City to study. Before Devpoint Labs, I was an Operating Room Pharmacy Tech at Primary Children's Hospital and a student at Rowan College.\";\n\nconst asyncAppend = (string, parentNode, delay = 30) => {\n    return new Promise((resolve, reject) => {\n        if(parentNode !== null) {\n\n            const timeoutAppend = (stringArr) => {\n                setTimeout(() => {\n                    if(stringArr[0] !== undefined) {\n                        const node = document.createElement(\"span\");\n                        node.textContent = stringArr[0];\n                        parentNode.appendChild(node);\n                        stringArr.shift();\n                        timeoutAppend(stringArr);\n                    } \n                }, delay);\n            };\n\n            timeoutAppend([...string]);\n            resolve(\"Success\");\n        }\n            resolve(\"Parent Node Not Found\");\n    });\n};\n\nconst VIEW = {\n\n    appendAboutMeResponse: () => {\n        asyncAppend(aboutMeText, _elements_js__WEBPACK_IMPORTED_MODULE_2__[\"elements\"].aboutMeResponse, 45)\n    },\n\n};\n\n\n\n\n\n//# sourceURL=webpack:///./public/js/views/view.js?");

/***/ })

/******/ });