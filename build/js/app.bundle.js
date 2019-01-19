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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
exports.KEY = {
    LEFT: 37,
    RIGHT: 39
};
exports.MISSING = {
    HAVE_NOTHING: 0,
    ME: 1,
    CPU: 2
};
exports.LOGO = "\n#    # # #####      # #    # #    # #   ##      #        ##   #####  \n#    # #   #        # #    # ##   # #  #  #     #       #  #  #    # \n#    # #   #        # #    # # #  # # #    #    #      #    # #####  \n#    # #   #        # #    # #  # # # ######    #      ###### #    # \n #  #  #   #   #    # #    # #   ## # #    #    #      #    # #    # \n  ##   #   #    ####   ####  #    # # #    #    ###### #    # #####\n";
exports.DISK = "\n _____\n|==   |\n|  o. |\n|__O__|  Created by Victor Kozlov\n";
exports.WIN_TEXT = [32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 95, 32, 32, 32, 32, 32, 32, 32, 95, 95, 10, 32, 32, 32, 95, 95, 32, 32, 95, 95, 95, 95, 95, 95, 32, 32, 95, 95, 32, 32, 95, 95, 32, 32, 32, 95, 32, 32, 32, 32, 32, 32, 95, 95, 40, 95, 41, 95, 95, 95, 32, 32, 47, 32, 47, 10, 32, 32, 47, 32, 47, 32, 47, 32, 47, 32, 95, 95, 32, 92, 47, 32, 47, 32, 47, 32, 47, 32, 32, 124, 32, 124, 32, 47, 124, 32, 47, 32, 47, 32, 47, 32, 95, 95, 32, 92, 47, 32, 47, 32, 10, 32, 47, 32, 47, 95, 47, 32, 47, 32, 47, 95, 47, 32, 47, 32, 47, 95, 47, 32, 47, 32, 32, 32, 124, 32, 124, 47, 32, 124, 47, 32, 47, 32, 47, 32, 47, 32, 47, 32, 47, 95, 47, 32, 32, 10, 32, 92, 95, 95, 44, 32, 47, 92, 95, 95, 95, 95, 47, 92, 95, 95, 44, 95, 47, 32, 32, 32, 32, 124, 95, 95, 47, 124, 95, 95, 47, 95, 47, 95, 47, 32, 47, 95, 40, 95, 41, 32, 32, 32, 10, 47, 95, 95, 95, 95, 47, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32].map(function (it) {
    return String.fromCharCode(it);
}).join('');
exports.LOOSE_TEXT = [32, 32, 95, 95, 32, 32, 32, 32, 32, 32, 32, 95, 32, 95, 32, 10, 32, 47, 32, 95, 124, 32, 95, 95, 32, 95, 40, 95, 41, 32, 124, 10, 124, 32, 124, 95, 32, 47, 32, 95, 96, 32, 124, 32, 124, 32, 124, 10, 124, 32, 32, 95, 124, 32, 40, 95, 124, 32, 124, 32, 124, 32, 124, 10, 124, 95, 124, 32, 32, 92, 95, 95, 44, 95, 124, 95, 124, 95, 124, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32].map(function (it) {
    return String.fromCharCode(it);
}).join('');
exports.LOOSE_LOGO = [32, 32, 32, 32, 32, 32, 46, 32, 32, 32, 32, 32, 32, 32, 46, 10, 32, 32, 32, 32, 32, 32, 92, 96, 45, 34, 39, 34, 45, 39, 47, 10, 32, 32, 32, 32, 32, 32, 32, 125, 32, 54, 32, 54, 32, 123, 10, 32, 32, 32, 32, 32, 32, 61, 46, 32, 32, 89, 32, 32, 44, 61, 10, 32, 32, 32, 32, 40, 34, 34, 45, 39, 42, 42, 42, 96, 45, 34, 34, 41, 10, 32, 32, 32, 32, 32, 96, 45, 47, 32, 32, 32, 32, 32, 92, 45, 39].map(function (it) {
    return String.fromCharCode(it);
}).join('');
exports.WIN_LOGO = "\n  /\\_/\\  (\n ( ^.^ ) _)\n   \\\"/  (\n ( | | )\n(__d b__)\n";

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var Stage = function () {
    function Stage(game) {
        this.active = false;
        this.game = game;
        this.screen = game.screen;
        this.cnt = 0;
    }
    Stage.prototype.render = function () {};
    return Stage;
}();
exports.Stage = Stage;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var consts_1 = __webpack_require__(1);
var stageGame_1 = __webpack_require__(8);
var stage_1 = __webpack_require__(2);
var StageIntro = function (_super) {
    tslib_1.__extends(StageIntro, _super);
    function StageIntro(game) {
        var _this = _super.call(this, game) || this;
        _this.x = 0;
        setTimeout(function () {
            _this.active = true;
        }, 1000);
        return _this;
    }
    StageIntro.prototype.render = function () {
        this.screen.clear();
        this.screen.printMultiline(this.x, 2, consts_1.LOGO);
        this.screen.print(23, 20, 'press any key');
        this.cnt++;
        if (this.cnt % 10 <= 5) this.screen.printMultiline(15, 22, consts_1.DISK);
        this.x -= 1;
        if (this.x < -50) this.x = this.screen.WIDTH;
        if (this.game.lastKey && this.active) this.game.stage = new stageGame_1.StageGame(this.game);
    };
    return StageIntro;
}(stage_1.Stage);
exports.StageIntro = StageIntro;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(5);


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var game_1 = __webpack_require__(6);
var stageIntro_1 = __webpack_require__(3);
var game = new game_1.Game();
game.stage = new stageIntro_1.StageIntro(game);
game.render();

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var screen_1 = __webpack_require__(7);
var Game = function () {
    function Game() {
        var _this = this;
        this.stage = null;
        this.screen = new screen_1.Screen();
        this.lastKey = null;
        window.addEventListener('keydown', function (e) {
            _this.lastKey = e.keyCode;
        });
        window.addEventListener('keyup', function (e) {
            _this.lastKey = null;
        });
    }
    Game.prototype.render = function () {
        var _this = this;
        setInterval(function () {
            _this.stage.render();
            _this.screen.render();
        }, 100);
    };
    return Game;
}();
exports.Game = Game;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var Screen = function () {
    function Screen() {
        var _this = this;
        this.WIDTH = 64;
        this.HEIGHT = 32;
        this.clear();
        var el = document.getElementById('screen');
        this.oldScreen = null;
        this.newScreen = this.generateNewScreen();
        this.domCells = new Array(this.HEIGHT);
        this.domCells.fill([]);
        this.domCells.forEach(function (r, y) {
            _this.domCells[y] = new Array(_this.WIDTH);
            _this.domCells[y].fill({});
            var domRow = document.createElement('div');
            domRow.className = 'row';
            el.appendChild(domRow);
            _this.domCells[y].forEach(function (c, x) {
                var domCell = _this.domCells[y][x] = document.createElement('div');
                domCell.className = 'cell';
                domRow.appendChild(domCell);
            });
        });
        this.clear();
    }
    Screen.prototype.generateNewScreen = function () {
        var _this = this;
        var rows = new Array(this.HEIGHT);
        rows.fill([]);
        rows.forEach(function (r, i) {
            rows[i] = new Array(_this.WIDTH);
            rows[i].fill(' ');
        });
        return rows;
    };
    Screen.prototype.clear = function () {
        this.oldScreen = this.newScreen;
        this.newScreen = this.generateNewScreen();
    };
    Screen.prototype.print = function (x, y, s) {
        for (var i = 0; i < s.length; i++) {
            if (y >= this.newScreen.length) break;
            var pos = x + i;
            if (pos >= this.newScreen[y].length) continue;
            this.newScreen[y][x + i] = s[i];
        }
    };
    Screen.prototype.printMultiline = function (x, y, s) {
        var _this = this;
        s.split('\n').forEach(function (str, i) {
            _this.print(x, y + i, str);
        });
    };
    Screen.prototype.render = function () {
        var _this = this;
        var res = '';
        this.newScreen.forEach(function (r, y) {
            r.forEach(function (char, x) {
                if (_this.newScreen[y][x] !== _this.oldScreen[y][x]) {
                    _this.domCells[y][x].textContent = char;
                }
            });
        });
    };
    return Screen;
}();
exports.Screen = Screen;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var stage_1 = __webpack_require__(2);
var consts_1 = __webpack_require__(1);
var stageWin_1 = __webpack_require__(9);
var stageLoose_1 = __webpack_require__(10);
var StageGame = function (_super) {
    tslib_1.__extends(StageGame, _super);
    function StageGame(game) {
        var _this = _super.call(this, game) || this;
        _this.count = {
            me: 0,
            cpu: 0
        };
        _this.ball = {
            coord: { x: 10, y: 10 },
            vel: { x: 1, y: 1 }
        };
        _this.myPlatform = {
            width: 5,
            x: 10, y: _this.screen.HEIGHT - 2
        };
        _this.cpuPlatform = {
            width: 5,
            x: 10, y: 2
        };
        return _this;
    }
    StageGame.prototype.hitBallVsWall = function () {
        if (this.ball.coord.y >= this.screen.HEIGHT - 1) {
            this.ball.vel.y = -1;
            return consts_1.MISSING.ME;
        }
        if (this.ball.coord.y <= 0) {
            this.ball.vel.y = 1;
            return consts_1.MISSING.CPU;
        }
        if (this.ball.coord.x >= this.screen.WIDTH - 1) this.ball.vel.x = -1;
        if (this.ball.coord.x <= 0) this.ball.vel.x = 1;
        return consts_1.MISSING.HAVE_NOTHING;
    };
    StageGame.prototype.hitBallVsPlatform = function (platform) {
        if (platform.y === this.ball.coord.y) {
            if (this.ball.coord.x >= platform.x && this.ball.coord.x <= platform.x + platform.width) {
                this.ball.vel.y *= -1;
            }
        }
    };
    StageGame.prototype.renderBall = function () {
        this.screen.print(this.ball.coord.x, this.ball.coord.y, '0');
        var missing = this.hitBallVsWall();
        if (missing === consts_1.MISSING.CPU) {
            this.count.cpu++;
        } else if (missing === consts_1.MISSING.ME) {
            this.count.me++;
        }
        if (this.count.cpu >= 3) {
            this.game.stage = new stageWin_1.StageWin(this.game);
            return;
        }
        if (this.count.me >= 3) {
            this.game.stage = new stageLoose_1.StageLoose(this.game);
            return;
        }
        this.hitBallVsPlatform(this.myPlatform);
        this.hitBallVsPlatform(this.cpuPlatform);
        this.ball.coord.x += this.ball.vel.x;
        this.ball.coord.y += this.ball.vel.y;
    };
    StageGame.prototype.renderCount = function () {
        this.screen.print(40, 1, this.count.me + ':' + this.count.cpu);
    };
    StageGame.getString = function (symbol, size) {
        var res = symbol;
        for (var i = 1; i < size; i++) {
            res += symbol;
        }
        return res;
    };
    StageGame.prototype.renderPlatform = function (platform) {
        if (platform.x < 0) platform.x = 0;
        if (platform.x > this.screen.WIDTH - platform.width) platform.x = this.screen.WIDTH - platform.width;
        this.screen.print(platform.x, platform.y, '0' + StageGame.getString('~', platform.width - 2) + '0');
    };
    StageGame.prototype.renderMyPlatform = function () {
        this.renderPlatform(this.myPlatform);
        if (this.game.lastKey === consts_1.KEY.LEFT) {
            this.myPlatform.x -= 1;
        }
        if (this.game.lastKey === consts_1.KEY.RIGHT) {
            this.myPlatform.x += 1;
        }
    };
    StageGame.prototype.renderCpuPlatform = function () {
        this.renderPlatform(this.cpuPlatform);
        var dist = this.ball.coord.y - this.cpuPlatform.y;
        if (dist > this.game.screen.HEIGHT / 2) return;
        var delta = this.cpuPlatform.x - this.ball.coord.x;
        if (delta > 0) this.cpuPlatform.x -= 1;
        if (delta < 0) this.cpuPlatform.x += 1;
    };
    StageGame.prototype.render = function () {
        this.screen.clear();
        this.renderBall();
        this.renderMyPlatform();
        this.renderCpuPlatform();
        this.renderCount();
    };
    return StageGame;
}(stage_1.Stage);
exports.StageGame = StageGame;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var stage_1 = __webpack_require__(2);
var consts_1 = __webpack_require__(1);
var stageIntro_1 = __webpack_require__(3);
var StageWin = function (_super) {
    tslib_1.__extends(StageWin, _super);
    function StageWin(game) {
        var _this = _super.call(this, game) || this;
        setTimeout(function () {
            _this.active = true;
        }, 3000);
        return _this;
    }
    StageWin.prototype.render = function () {
        this.screen.clear();
        this.cnt++;
        if (this.cnt % 20 <= 10) this.screen.printMultiline(0, 0, consts_1.WIN_TEXT);
        this.screen.printMultiline(10, 10, consts_1.WIN_LOGO);
        if (this.active && this.game.lastKey) this.game.stage = new stageIntro_1.StageIntro(this.game);
    };
    return StageWin;
}(stage_1.Stage);
exports.StageWin = StageWin;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var stage_1 = __webpack_require__(2);
var consts_1 = __webpack_require__(1);
var stageIntro_1 = __webpack_require__(3);
var StageLoose = function (_super) {
    tslib_1.__extends(StageLoose, _super);
    function StageLoose(game) {
        var _this = _super.call(this, game) || this;
        setTimeout(function () {
            _this.active = true;
        }, 3000);
        return _this;
    }
    StageLoose.prototype.render = function () {
        this.screen.clear();
        this.cnt++;
        if (this.cnt % 20 <= 10) this.screen.printMultiline(0, 0, consts_1.LOOSE_TEXT);
        this.screen.printMultiline(10, 10, consts_1.LOOSE_LOGO);
        if (this.active && this.game.lastKey) this.game.stage = new stageIntro_1.StageIntro(this.game);
    };
    return StageLoose;
}(stage_1.Stage);
exports.StageLoose = StageLoose;

/***/ })
/******/ ]);