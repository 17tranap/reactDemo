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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

class Square extends React.Component {
  render() {
    return React.createElement("button", { className: "square" });
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return React.createElement(Square, null);
  }

  render() {
    const status = 'Next player: X';

    return React.createElement(
      "div",
      null,
      React.createElement(
        "div",
        { className: "status" },
        status
      ),
      React.createElement(
        "div",
        { className: "board-row" },
        this.renderSquare(0),
        this.renderSquare(1),
        this.renderSquare(2)
      ),
      React.createElement(
        "div",
        { className: "board-row" },
        this.renderSquare(3),
        this.renderSquare(4),
        this.renderSquare(5)
      ),
      React.createElement(
        "div",
        { className: "board-row" },
        this.renderSquare(6),
        this.renderSquare(7),
        this.renderSquare(8)
      )
    );
  }
}

class Game extends React.Component {
  render() {
    return React.createElement(
      "div",
      { className: "game" },
      React.createElement(
        "div",
        { className: "game-board" },
        React.createElement(Board, null)
      ),
      React.createElement(
        "div",
        { className: "game-info" },
        React.createElement("div", null),
        React.createElement("ol", null)
      )
    );
  }
}

// ========================================

ReactDOM.render(React.createElement(Game, null), document.getElementById('root'));

/***/ })
/******/ ]);