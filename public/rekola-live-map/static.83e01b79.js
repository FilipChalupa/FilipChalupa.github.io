(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "https://onset.github.io/rekola-live-map/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (module) {
    if (!module.webpackPolyfill) {
        module.deprecate = function () {};
        module.paths = [];
        // module.parent = undefined by default
        if (!module.children) module.children = [];
        Object.defineProperty(module, "loaded", {
            enumerable: true,
            get: function get() {
                return module.l;
            }
        });
        Object.defineProperty(module, "id", {
            enumerable: true,
            get: function get() {
                return module.i;
            }
        });
        module.webpackPolyfill = 1;
    }
    return module;
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createElement = exports.findExport = exports.resolveExport = exports.requireById = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;
var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
    return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};
var _react = __webpack_require__(0);
var _react2 = _interopRequireDefault(_react);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}
var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);
var isWebpack = exports.isWebpack = function isWebpack() {
    return typeof __webpack_require__ !== 'undefined';
};
var babelInterop = exports.babelInterop = function babelInterop(mod) {
    return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod.default : mod;
};
var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
    return _react2.default.createElement('div', null, 'Loading...');
};
var DefaultError = exports.DefaultError = function DefaultError(_ref) {
    var error = _ref.error;
    return _react2.default.createElement('div', null, 'Error: ', error && error.message);
};
var tryRequire = exports.tryRequire = function tryRequire(id) {
    try {
        return requireById(id);
    } catch (err) {
        // warn if there was an error while requiring the chunk during development
        // this can sometimes lead the server to render the loading component.
        if (false) {
            console.warn('chunk not available for synchronous require yet: ' + id + ': ' + err.message, err.stack);
        }
    }
    return null;
};
var requireById = exports.requireById = function requireById(id) {
    if (!isWebpack() && typeof id === 'string') {
        return module.require(id);
    }
    return __webpack_require__(id);
};
var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, context, modCache) {
    var isSync = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;
    var exp = findExport(mod, key);
    if (onLoad && mod) {
        var _isServer = typeof window === 'undefined';
        var info = { isServer: _isServer, isSync: isSync };
        onLoad(mod, info, props, context);
    }
    if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
    return exp;
};
var findExport = exports.findExport = function findExport(mod, key) {
    if (typeof key === 'function') {
        return key(mod);
    } else if (key === null) {
        return mod;
    }
    return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};
var createElement = exports.createElement = function createElement(Component, props) {
    return _react2.default.isValidElement(Component) ? _react2.default.cloneElement(Component, props) : _react2.default.createElement(Component, props);
};
var callForString = exports.callForString = function callForString(strFun, props) {
    return typeof strFun === 'function' ? strFun(props) : strFun;
};
var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
    return !isServer && modCache[callForString(chunkName, props)];
};
var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
    return modCache[callForString(chunkName, props)] = exp;
};
var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
    return promisecache[callForString(chunkName, props)];
};
var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
    return promisecache[callForString(chunkName, props)] = pr;
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BROWSER = typeof window !== 'undefined';
var Map = BROWSER ? __webpack_require__(33) : {};
var data = [__webpack_require__(6).default, __webpack_require__(7).default, __webpack_require__(8).default, __webpack_require__(9).default, __webpack_require__(10).default, __webpack_require__(11).default, __webpack_require__(12).default, __webpack_require__(13).default, __webpack_require__(14).default, __webpack_require__(15).default, __webpack_require__(36).default];
var REFRESH_INTERVAL = 1500;

var Home = function (_React$Component) {
    _inherits(Home, _React$Component);

    function Home() {
        _classCallCheck(this, Home);

        var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));

        _this.counter = 0;
        _this.state = {
            mapProps: {
                items: []
            }
        };
        _this.update = function () {
            _this.setState({
                mapProps: {
                    items: data[_this.counter % data.length]
                }
            });
            _this.counter++;
            _this.timer = window.setTimeout(_this.update, REFRESH_INTERVAL);
        };
        return _this;
    }

    _createClass(Home, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (BROWSER) {
                this.update();
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            if (BROWSER) {
                window.clearTimeout(this.timer);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var mapProps = this.state.mapProps;

            return _react2.default.createElement(
                'div',
                { style: {
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0
                    } },
                Map.default && _react2.default.createElement(Map.default, mapProps)
            );
        }
    }]);

    return Home;
}(_react2.default.Component);

exports.default = Home;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = [{
    "position": {
        "lat": 50.079782,
        "lng": 14.429705
    },
    "id": 1
}, {
    "position": {
        "lat": 50.082722,
        "lng": 14.422270
    },
    "id": 2
}, {
    "position": {
        "lat": 50.082390,
        "lng": 14.419274
    },
    "id": 3
}, {
    "position": {
        "lat": 50.097231,
        "lng": 14.404542
    },
    "id": 4
}, {
    "position": {
        "lat": 50.103196,
        "lng": 14.446886
    },
    "id": 5
}, {
    "position": {
        "lat": 50.078836,
        "lng": 14.432824
    },
    "id": 6
}, {
    "position": {
        "lat": 50.080268,
        "lng": 14.451106
    },
    "id": 7
}, {
    "position": {
        "lat": 50.099975,
        "lng": 14.430497
    },
    "id": 8
}, {
    "position": {
        "lat": 50.097486,
        "lng": 14.405088
    },
    "id": 9
}, {
    "position": {
        "lat": 50.100872,
        "lng": 14.394497
    },
    "id": 10
}, {
    "position": {
        "lat": 50.091176,
        "lng": 14.410225
    },
    "id": 11
}, {
    "position": {
        "lat": 50.081678,
        "lng": 14.419605
    },
    "id": 12
}];

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _ = __webpack_require__(6);

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _2.default.map(function (item) {
    if (item.id === 2) {
        return _extends({}, item, {
            position: {
                "lat": 50.082846,
                "lng": 14.421219
            }
        });
    } else if (item.id === 5) {
        return _extends({}, item, {
            position: {
                "lat": 50.103251,
                "lng": 14.443539
            }
        });
    } else {
        return item;
    }
});

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _ = __webpack_require__(7);

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _2.default.map(function (item) {
    if (item.id === 2) {
        return _extends({}, item, {
            position: {
                "lat": 50.082185,
                "lng": 14.418601
            }
        });
    } else if (item.id === 3) {
        return _extends({}, item, {
            position: {
                "lat": 50.081041,
                "lng": 14.419789
            }
        });
    } else if (item.id === 5) {
        return _extends({}, item, {
            position: {
                "lat": 50.101599,
                "lng": 14.443367
            }
        });
    } else {
        return item;
    }
});

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _ = __webpack_require__(8);

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _2.default.map(function (item) {
    if (item.id === 2) {
        return _extends({}, item, {
            position: {
                "lat": 50.081497,
                "lng": 14.414266
            }
        });
    } else if (item.id === 3) {
        return _extends({}, item, {
            position: {
                "lat": 50.077984,
                "lng": 14.419531
            }
        });
    } else if (item.id === 4) {
        return _extends({}, item, {
            position: {
                "lat": 50.096763,
                "lng": 14.408018
            }
        });
    } else if (item.id === 5) {
        return _extends({}, item, {
            position: {
                "lat": 50.099122,
                "lng": 14.443539
            }
        });
    } else {
        return item;
    }
});

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _ = __webpack_require__(9);

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _2.default.map(function (item) {
    if (item.id === 2) {
        return _extends({}, item, {
            position: {
                "lat": 50.081290,
                "lng": 14.407722
            }
        });
    } else if (item.id === 3) {
        return _extends({}, item, {
            position: {
                "lat": 50.075781,
                "lng": 14.419059
            }
        });
    } else if (item.id === 4) {
        return _extends({}, item, {
            position: {
                "lat": 50.093680,
                "lng": 14.409349
            }
        });
    } else if (item.id === 5) {
        return _extends({}, item, {
            position: {
                "lat": 50.098516,
                "lng": 14.439848
            }
        });
    } else {
        return item;
    }
});

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _ = __webpack_require__(10);

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _2.default.map(function (item) {
    if (item.id === 2) {
        return _extends({}, item, {
            position: {
                "lat": 50.080698,
                "lng": 14.407979
            }
        });
    } else if (item.id === 3) {
        return _extends({}, item, {
            position: {
                "lat": 50.075753,
                "lng": 14.414896
            }
        });
    } else if (item.id === 4) {
        return _extends({}, item, {
            position: {
                "lat": 50.092937,
                "lng": 14.406344
            }
        });
    } else if (item.id === 5) {
        return _extends({}, item, {
            position: {
                "lat": 50.097305,
                "lng": 14.434698
            }
        });
    } else {
        return item;
    }
});

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _ = __webpack_require__(11);

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _2.default.map(function (item) {
    if (item.id === 2) {
        return _extends({}, item, {
            position: {
                "lat": 50.078729,
                "lng": 14.408133
            }
        });
    } else if (item.id === 3) {
        return _extends({}, item, {
            position: {
                "lat": 50.075395,
                "lng": 14.409446
            }
        });
    } else if (item.id === 4) {
        return _extends({}, item, {
            position: {
                "lat": 50.091395,
                "lng": 14.409863
            }
        });
    } else if (item.id === 5) {
        return _extends({}, item, {
            position: {
                "lat": 50.095433,
                "lng": 14.428432
            }
        });
    } else {
        return item;
    }
});

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _ = __webpack_require__(12);

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _2.default.map(function (item) {
    if (item.id === 1) {
        return _extends({}, item, {
            position: {
                "lat": 50.075752,
                "lng": 14.420121
            }
        });
    } else if (item.id === 2) {
        return _extends({}, item, {
            position: {
                "lat": 50.075773,
                "lng": 14.408627
            }
        });
    } else if (item.id === 3) {
        return _extends({}, item, {
            position: {
                "lat": 50.075395,
                "lng": 14.407558
            }
        });
    } else if (item.id === 4) {
        return _extends({}, item, {
            position: {
                "lat": 50.089954,
                "lng": 14.410121
            }
        });
    } else if (item.id === 5) {
        return _extends({}, item, {
            position: {
                "lat": 50.094442,
                "lng": 14.419592
            }
        });
    } else {
        return item;
    }
});

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _ = __webpack_require__(13);

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _2.default.map(function (item) {
    if (item.id === 2) {
        return _extends({}, item, {
            position: {
                "lat": 50.075470,
                "lng": 14.408176
            }
        });
    } else if (item.id === 3) {
        return _extends({}, item, {
            position: {
                "lat": 50.074927,
                "lng": 14.407687
            }
        });
    } else if (item.id === 4) {
        return _extends({}, item, {
            position: {
                "lat": 50.088907,
                "lng": 14.410293
            }
        });
    } else if (item.id === 5) {
        return _extends({}, item, {
            position: {
                "lat": 50.093395,
                "lng": 14.414270
            }
        });
    } else {
        return item;
    }
});

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _ = __webpack_require__(14);

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _2.default.map(function (item) {
    if (item.id === 3) {
        return _extends({}, item, {
            position: {
                "lat": 50.074967,
                "lng": 14.407766
            }
        });
    } else if (item.id === 4) {
        return _extends({}, item, {
            position: {
                "lat": 50.088963,
                "lng": 14.410722
            }
        });
    } else if (item.id === 5) {
        return _extends({}, item, {
            position: {
                "lat": 50.089761,
                "lng": 14.411610
            }
        });
    } else {
        return item;
    }
});

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _component = __webpack_require__(37);

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h1',
      null,
      'This is what we\'re all about.'
    ),
    _react2.default.createElement(
      'p',
      null,
      'React, static sites, performance, speed. It\'s the stuff that makes us tick.'
    ),
    _component2.default
  );
};
// Example of using paths alias via tsconfig.json to easily re-use legacy code
// Also, use TypeScript and JavaScript interchangeably.

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactStatic.withRouteData)(function (_ref) {
    var post = _ref.post;
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            _reactStatic.Link,
            { to: '/blog/' },
            '<',
            ' Back'
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
            'h3',
            null,
            post.title
        ),
        _react2.default.createElement(
            'p',
            null,
            post.body
        )
    );
});

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactStatic.withRouteData)(function (_ref) {
    var posts = _ref.posts;
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'h1',
            null,
            'It\'s blog time.'
        ),
        _react2.default.createElement('br', null),
        'All Posts:',
        _react2.default.createElement(
            'ul',
            null,
            posts.map(function (post) {
                return _react2.default.createElement(
                    'li',
                    { key: post.id },
                    _react2.default.createElement(
                        _reactStatic.Link,
                        { to: '/blog/post/' + post.id + '/' },
                        post.title
                    )
                );
            })
        )
    );
});

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'h1',
            null,
            '404 - Oh no\'s! We couldn\'t find that page :('
        )
    );
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(21);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(22);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Export your top level component as JSX (for static rendering)
exports.default = _App2.default;
// Render your app

// Your top level component

if (typeof document !== 'undefined') {
    var renderMethod =  false ? _reactDom2.default.render : _reactDom2.default.hydrate || _reactDom2.default.render;
    var render = function render(Comp) {
        renderMethod(_react2.default.createElement(Comp, null), document.getElementById('root'));
    };
    // Render!
    render(_App2.default);
}

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _reactHotLoader = __webpack_require__(23);

var _reactStaticRoutes = __webpack_require__(24);

var _reactStaticRoutes2 = _interopRequireDefault(_reactStaticRoutes);

__webpack_require__(38);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
var App = function App() {
  return _react2.default.createElement(
    _reactStatic.Router,
    null,
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'nav',
        null,
        _react2.default.createElement(
          _reactStatic.Link,
          { to: '/' },
          'Home'
        ),
        _react2.default.createElement(
          _reactStatic.Link,
          { to: '/about' },
          'About'
        ),
        _react2.default.createElement(
          _reactStatic.Link,
          { to: '/blog' },
          'Blog'
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'content' },
        _react2.default.createElement(_reactStaticRoutes2.default, null)
      )
    )
  );
};
exports.default = (0, _reactHotLoader.hot)(module)(App);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _path2 = __webpack_require__(25);

var _path3 = _interopRequireDefault(_path2);

var _importCss2 = __webpack_require__(26);

var _importCss3 = _interopRequireDefault(_importCss2);

var _universalImport2 = __webpack_require__(27);

var _universalImport3 = _interopRequireDefault(_universalImport2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(28);

var _reactUniversalComponent = __webpack_require__(29);

var _reactUniversalComponent2 = _interopRequireDefault(_reactUniversalComponent);

var _reactStatic = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _reactUniversalComponent.setHasBabelPlugin)();
var universalOptions = {
    loading: function loading() {
        return null;
    },
    error: function error(props) {
        console.error(props.error);
        return _react2.default.createElement(
            'div',
            null,
            'An error occurred loading this page\'s template. More information is available in the console.'
        );
    }
};
var t_0 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
    id: '../src/containers/Home',
    file: 'C:/z/rekola-live-map/dist/react-static-routes.js',
    load: function load() {
        return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 5)), (0, _importCss3.default)('src/containers/Home', {
            disableWarnings: true
        })]).then(function (proms) {
            return proms[0];
        });
    },
    path: function path() {
        return _path3.default.join(__dirname, '../src/containers/Home');
    },
    resolve: function resolve() {
        return /*require.resolve*/(5);
    },
    chunkName: function chunkName() {
        return 'src/containers/Home';
    }
}), universalOptions);
var t_1 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
    id: '../src/containers/About',
    file: 'C:/z/rekola-live-map/dist/react-static-routes.js',
    load: function load() {
        return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 16)), (0, _importCss3.default)('src/containers/About', {
            disableWarnings: true
        })]).then(function (proms) {
            return proms[0];
        });
    },
    path: function path() {
        return _path3.default.join(__dirname, '../src/containers/About');
    },
    resolve: function resolve() {
        return /*require.resolve*/(16);
    },
    chunkName: function chunkName() {
        return 'src/containers/About';
    }
}), universalOptions);
var t_2 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
    id: '../src/containers/Post',
    file: 'C:/z/rekola-live-map/dist/react-static-routes.js',
    load: function load() {
        return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 17)), (0, _importCss3.default)('src/containers/Post', {
            disableWarnings: true
        })]).then(function (proms) {
            return proms[0];
        });
    },
    path: function path() {
        return _path3.default.join(__dirname, '../src/containers/Post');
    },
    resolve: function resolve() {
        return /*require.resolve*/(17);
    },
    chunkName: function chunkName() {
        return 'src/containers/Post';
    }
}), universalOptions);
var t_3 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
    id: '../src/containers/Blog',
    file: 'C:/z/rekola-live-map/dist/react-static-routes.js',
    load: function load() {
        return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 18)), (0, _importCss3.default)('src/containers/Blog', {
            disableWarnings: true
        })]).then(function (proms) {
            return proms[0];
        });
    },
    path: function path() {
        return _path3.default.join(__dirname, '../src/containers/Blog');
    },
    resolve: function resolve() {
        return /*require.resolve*/(18);
    },
    chunkName: function chunkName() {
        return 'src/containers/Blog';
    }
}), universalOptions);
var t_4 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
    id: '../src/containers/404',
    file: 'C:/z/rekola-live-map/dist/react-static-routes.js',
    load: function load() {
        return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 19)), (0, _importCss3.default)('src/containers/404', {
            disableWarnings: true
        })]).then(function (proms) {
            return proms[0];
        });
    },
    path: function path() {
        return _path3.default.join(__dirname, '../src/containers/404');
    },
    resolve: function resolve() {
        return /*require.resolve*/(19);
    },
    chunkName: function chunkName() {
        return 'src/containers/404';
    }
}), universalOptions);
// Template Map
global.componentsByTemplateID = global.componentsByTemplateID || [t_0, t_1, t_2, t_3, t_4];
// Template Tree
global.templateIDsByPath = global.templateIDsByPath || {
    '404': 4
};
// Get template for given path
var getComponentForPath = function getComponentForPath(path) {
    path = (0, _reactStatic.cleanPath)(path);
    return global.componentsByTemplateID[global.templateIDsByPath[path]];
};
global.reactStaticGetComponentForPath = getComponentForPath;
global.reactStaticRegisterTemplateIDForPath = function (path, id) {
    global.templateIDsByPath[path] = id;
};

var Routes = function (_Component) {
    _inherits(Routes, _Component);

    function Routes() {
        _classCallCheck(this, Routes);

        return _possibleConstructorReturn(this, (Routes.__proto__ || Object.getPrototypeOf(Routes)).apply(this, arguments));
    }

    _createClass(Routes, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                Comp = _props.component,
                render = _props.render,
                children = _props.children;

            var getFullComponentForPath = function getFullComponentForPath(path) {
                var Comp = getComponentForPath(path);
                var is404 = path === '404';
                if (!Comp) {
                    is404 = true;
                    Comp = getComponentForPath('404');
                }
                return function (newProps) {
                    return Comp ? _react2.default.createElement(Comp, _extends({}, newProps, is404 ? { is404: true } : {})) : null;
                };
            };
            var renderProps = {
                componentsByTemplateID: global.componentsByTemplateID,
                templateIDsByPath: global.templateIDsByPath,
                getComponentForPath: getFullComponentForPath
            };
            if (Comp) {
                return _react2.default.createElement(Comp, renderProps);
            }
            if (render || children) {
                return (render || children)(renderProps);
            }
            // This is the default auto-routing renderer
            return _react2.default.createElement(_reactRouterDom.Route, { path: '*', render: function render(props) {
                    var Comp = getFullComponentForPath(props.location.pathname);
                    // If Comp is used as a component here, it triggers React to re-mount the entire
                    // component tree underneath during reconciliation, losing all internal state.
                    // By unwrapping it here we keep the real, static component exposed directly to React.
                    return Comp && Comp(_extends({}, props, { key: props.location.pathname }));
                } });
        }
    }]);

    return Routes;
}(_react.Component);

exports.default = Routes;
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/importCss");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;
var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }return target;
};
var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();
var _requireUniversalModule = __webpack_require__(30);
Object.defineProperty(exports, 'CHUNK_NAMES', {
    enumerable: true,
    get: function get() {
        return _requireUniversalModule.CHUNK_NAMES;
    }
});
Object.defineProperty(exports, 'MODULE_IDS', {
    enumerable: true,
    get: function get() {
        return _requireUniversalModule.MODULE_IDS;
    }
});
var _reportChunks = __webpack_require__(31);
Object.defineProperty(exports, 'ReportChunks', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_reportChunks).default;
    }
});
var _react = __webpack_require__(0);
var _react2 = _interopRequireDefault(_react);
var _propTypes = __webpack_require__(4);
var _propTypes2 = _interopRequireDefault(_propTypes);
var _hoistNonReactStatics = __webpack_require__(32);
var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);
var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);
var _utils = __webpack_require__(3);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
function _objectWithoutProperties(obj, keys) {
    var target = {};for (var i in obj) {
        if (keys.indexOf(i) >= 0) continue;
        if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
        target[i] = obj[i];
    }return target;
}
var hasBabelPlugin = false;
var isHMR = function isHMR() {
    return (
        // $FlowIgnore
        module.hot && (module.hot.data || module.hot.status() === 'apply')
    );
};
var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
    hasBabelPlugin = true;
};
function universal(component) {
    var _class, _temp;
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _opts$loading = opts.loading,
        Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
        _opts$error = opts.error,
        Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
        _opts$minDelay = opts.minDelay,
        minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
        _opts$alwaysDelay = opts.alwaysDelay,
        alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
        _opts$testBabelPlugin = opts.testBabelPlugin,
        testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
        _opts$loadingTransiti = opts.loadingTransition,
        loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
        options = _objectWithoutProperties(opts, ['loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);
    var isDynamic = hasBabelPlugin || testBabelPlugin;
    options.isDynamic = isDynamic;
    options.modCache = {};
    options.promCache = {};
    return _temp = _class = function (_React$Component) {
        _inherits(UniversalComponent, _React$Component);
        _createClass(UniversalComponent, null, [{
            key: 'preload',
            /* eslint-enable react/sort-comp */
            /* eslint-disable react/sort-comp */
            value: function preload(props) {
                var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                props = props || {};
                var _req = (0, _requireUniversalModule2.default)(component, options, props),
                    requireAsync = _req.requireAsync,
                    requireSync = _req.requireSync;
                var Component = void 0;
                try {
                    Component = requireSync(props, context);
                } catch (error) {
                    return Promise.reject(error);
                }
                if (Component) return Promise.resolve(Component);
                return requireAsync(props, context);
            }
        }]);
        function UniversalComponent(props, context) {
            _classCallCheck(this, UniversalComponent);
            var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));
            _this.update = function (state) {
                var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
                var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
                var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
                if (!_this._mounted) return;
                if (!state.error) state.error = null;
                _this.handleAfter(state, isMount, isSync, isServer);
            };
            _this.state = { error: null };
            return _this;
        }
        _createClass(UniversalComponent, [{
            key: 'componentWillMount',
            value: function componentWillMount() {
                this._mounted = true;
                var _req2 = (0, _requireUniversalModule2.default)(component, options, this.props),
                    addModule = _req2.addModule,
                    requireSync = _req2.requireSync,
                    requireAsync = _req2.requireAsync,
                    asyncOnly = _req2.asyncOnly;
                var Component = void 0;
                try {
                    Component = requireSync(this.props, this.context);
                } catch (error) {
                    return this.update({ error: error });
                }
                this._asyncOnly = asyncOnly;
                var chunkName = addModule(this.props); // record the module for SSR flushing :)
                if (this.context.report) {
                    this.context.report(chunkName);
                }
                if (Component || _utils.isServer) {
                    this.handleBefore(true, true, _utils.isServer);
                    this.update({ Component: Component }, true, true, _utils.isServer);
                    return;
                }
                this.handleBefore(true, false);
                this.requireAsync(requireAsync, this.props, true);
            }
        }, {
            key: 'componentWillUnmount',
            value: function componentWillUnmount() {
                this._mounted = false;
            }
        }, {
            key: 'componentWillReceiveProps',
            value: function componentWillReceiveProps(nextProps) {
                var _this2 = this;
                if (isDynamic || this._asyncOnly) {
                    var _req3 = (0, _requireUniversalModule2.default)(component, options, nextProps, this.props),
                        requireSync = _req3.requireSync,
                        requireAsync = _req3.requireAsync,
                        shouldUpdate = _req3.shouldUpdate;
                    if (shouldUpdate(nextProps, this.props)) {
                        var Component = void 0;
                        try {
                            Component = requireSync(nextProps, this.context);
                        } catch (error) {
                            return this.update({ error: error });
                        }
                        this.handleBefore(false, !!Component);
                        if (!Component) {
                            return this.requireAsync(requireAsync, nextProps);
                        }
                        var state = { Component: Component };
                        if (alwaysDelay) {
                            if (loadingTransition) this.update({ Component: null }); // display `loading` during componentWillReceiveProps
                            setTimeout(function () {
                                return _this2.update(state, false, true);
                            }, minDelay);
                            return;
                        }
                        this.update(state, false, true);
                    } else if (isHMR()) {
                        var _Component = requireSync(nextProps, this.context);
                        this.setState({ Component: function Component() {
                                return null;
                            } }); // HMR /w Redux and HOCs can be finicky, so we
                        setTimeout(function () {
                            return _this2.setState({ Component: _Component });
                        }); // toggle components to insure updates occur
                    }
                }
            }
        }, {
            key: 'requireAsync',
            value: function requireAsync(_requireAsync, props, isMount) {
                var _this3 = this;
                if (this.state.Component && loadingTransition) {
                    this.update({ Component: null }); // display `loading` during componentWillReceiveProps
                }
                var time = new Date();
                _requireAsync(props, this.context).then(function (Component) {
                    var state = { Component: Component };
                    var timeLapsed = new Date() - time;
                    if (timeLapsed < minDelay) {
                        var extraDelay = minDelay - timeLapsed;
                        return setTimeout(function () {
                            return _this3.update(state, isMount);
                        }, extraDelay);
                    }
                    _this3.update(state, isMount);
                }).catch(function (error) {
                    return _this3.update({ error: error });
                });
            }
        }, {
            key: 'handleBefore',
            value: function handleBefore(isMount, isSync) {
                var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
                if (this.props.onBefore) {
                    var onBefore = this.props.onBefore;
                    var info = { isMount: isMount, isSync: isSync, isServer: isServer };
                    onBefore(info);
                }
            }
        }, {
            key: 'handleAfter',
            value: function handleAfter(state, isMount, isSync, isServer) {
                var Component = state.Component,
                    error = state.error;
                if (Component && !error) {
                    (0, _hoistNonReactStatics2.default)(UniversalComponent, Component, { preload: true });
                    if (this.props.onAfter) {
                        var onAfter = this.props.onAfter;
                        var info = { isMount: isMount, isSync: isSync, isServer: isServer };
                        onAfter(info, Component);
                    }
                } else if (error && this.props.onError) {
                    this.props.onError(error);
                }
                this.setState(state);
            }
        }, {
            key: 'render',
            value: function render() {
                var _state = this.state,
                    error = _state.error,
                    Component = _state.Component;
                var _props = this.props,
                    isLoading = _props.isLoading,
                    userError = _props.error,
                    props = _objectWithoutProperties(_props, ['isLoading', 'error']);
                // user-provided props (e.g. for data-fetching loading):
                if (isLoading) {
                    return (0, _utils.createElement)(Loading, props);
                } else if (userError) {
                    return (0, _utils.createElement)(Err, _extends({}, props, { error: userError }));
                } else if (error) {
                    return (0, _utils.createElement)(Err, _extends({}, props, { error: error }));
                } else if (Component) {
                    // primary usage (for async import loading + errors):
                    return (0, _utils.createElement)(Component, props);
                }
                return (0, _utils.createElement)(Loading, props);
            }
        }]);
        return UniversalComponent;
    }(_react2.default.Component), _class.contextTypes = {
        store: _propTypes2.default.object,
        report: _propTypes2.default.func
    }, _temp;
}
exports.default = universal;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;
exports.default = requireUniversalModule;
var _utils = __webpack_require__(3);
var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();
function requireUniversalModule(universalConfig, options, props, prevProps) {
    var key = options.key,
        _options$timeout = options.timeout,
        timeout = _options$timeout === undefined ? 15000 : _options$timeout,
        onLoad = options.onLoad,
        onError = options.onError,
        isDynamic = options.isDynamic,
        modCache = options.modCache,
        promCache = options.promCache;
    var config = getConfig(isDynamic, universalConfig, options, props);
    var chunkName = config.chunkName,
        path = config.path,
        resolve = config.resolve,
        load = config.load;
    var asyncOnly = !path && !resolve || typeof chunkName === 'function';
    var requireSync = function requireSync(props, context) {
        var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
        if (!exp) {
            var mod = void 0;
            if (!(0, _utils.isWebpack)() && path) {
                var modulePath = (0, _utils.callForString)(path, props) || '';
                mod = (0, _utils.tryRequire)(modulePath);
            } else if ((0, _utils.isWebpack)() && resolve) {
                var weakId = (0, _utils.callForString)(resolve, props);
                if (__webpack_require__.m[weakId]) {
                    mod = (0, _utils.tryRequire)(weakId);
                }
            }
            if (mod) {
                exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache, true);
            }
        }
        return exp;
    };
    var requireAsync = function requireAsync(props, context) {
        var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
        if (exp) return Promise.resolve(exp);
        var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
        if (cachedPromise) return cachedPromise;
        var prom = new Promise(function (res, rej) {
            var reject = function reject(error) {
                error = error || new Error('timeout exceeded');
                clearTimeout(timer);
                if (onError) {
                    var _isServer = typeof window === 'undefined';
                    var info = { isServer: _isServer };
                    onError(error, info);
                }
                rej(error);
            };
            // const timer = timeout && setTimeout(reject, timeout)
            var timer = timeout && setTimeout(reject, timeout);
            var resolve = function resolve(mod) {
                clearTimeout(timer);
                var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache);
                if (exp) return res(exp);
                reject(new Error('export not found'));
            };
            var request = load(props, { resolve: resolve, reject: reject });
            // if load doesn't return a promise, it must call resolveImport
            // itself. Most common is the promise implementation below.
            if (!request || typeof request.then !== 'function') return;
            request.then(resolve).catch(reject);
        });
        (0, _utils.cacheProm)(prom, chunkName, props, promCache);
        return prom;
    };
    var addModule = function addModule(props) {
        if (_utils.isServer || _utils.isTest) {
            if (chunkName) {
                var name = (0, _utils.callForString)(chunkName, props);
                if (name) CHUNK_NAMES.add(name);
                if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
            }
            if ((0, _utils.isWebpack)()) {
                var weakId = (0, _utils.callForString)(resolve, props);
                if (weakId) MODULE_IDS.add(weakId);
                return weakId;
            }
            if (!(0, _utils.isWebpack)()) {
                var modulePath = (0, _utils.callForString)(path, props);
                if (modulePath) MODULE_IDS.add(modulePath);
                return modulePath;
            }
        }
    };
    var shouldUpdate = function shouldUpdate(next, prev) {
        var cacheKey = (0, _utils.callForString)(chunkName, next);
        var config = getConfig(isDynamic, universalConfig, options, prev);
        var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);
        return cacheKey !== prevCacheKey;
    };
    return {
        requireSync: requireSync,
        requireAsync: requireAsync,
        addModule: addModule,
        shouldUpdate: shouldUpdate,
        asyncOnly: asyncOnly
    };
}
var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
    var chunks = Array.from(CHUNK_NAMES);
    CHUNK_NAMES.clear();
    return chunks;
};
var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
    var ids = Array.from(MODULE_IDS);
    MODULE_IDS.clear();
    return ids;
};
var clearChunks = exports.clearChunks = function clearChunks() {
    CHUNK_NAMES.clear();
    MODULE_IDS.clear();
};
var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
    if (isDynamic) {
        return typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;
    }
    var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
    function () {
        return universalConfig;
    };
    return {
        file: 'default',
        id: options.id || 'default',
        chunkName: options.chunkName || 'default',
        resolve: options.resolve || '',
        path: options.path || '',
        load: load
    };
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
    value: true
});
var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();
var _react = __webpack_require__(0);
var _react2 = _interopRequireDefault(_react);
var _propTypes = __webpack_require__(4);
var _propTypes2 = _interopRequireDefault(_propTypes);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var ReportChunks = function (_React$Component) {
    _inherits(ReportChunks, _React$Component);
    function ReportChunks() {
        _classCallCheck(this, ReportChunks);
        return _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).apply(this, arguments));
    }
    _createClass(ReportChunks, [{
        key: 'getChildContext',
        value: function getChildContext() {
            return {
                report: this.props.report
            };
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.Children.only(this.props.children);
        }
    }]);
    return ReportChunks;
}(_react2.default.Component);
ReportChunks.propTypes = {
    report: _propTypes2.default.func.isRequired
};
ReportChunks.childContextTypes = {
    report: _propTypes2.default.func.isRequired
};
exports.default = ReportChunks;

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Map = __webpack_require__(34);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Map).default;
  }
});
Object.defineProperty(exports, 'MapProps', {
  enumerable: true,
  get: function get() {
    return _Map.MapProps;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _googleMapsReact = __webpack_require__(35);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PRAGUE_LOCATION = {
    lat: 50.0875692,
    lng: 14.4211875
};

var MapContainer = function (_React$Component) {
    _inherits(MapContainer, _React$Component);

    function MapContainer() {
        _classCallCheck(this, MapContainer);

        return _possibleConstructorReturn(this, (MapContainer.__proto__ || Object.getPrototypeOf(MapContainer)).apply(this, arguments));
    }

    _createClass(MapContainer, [{
        key: 'render',
        value: function render() {
            var items = this.props.items;

            return _react2.default.createElement(
                _googleMapsReact.Map,
                { google: this.props.google, zoom: 14, initialCenter: PRAGUE_LOCATION },
                items.map(function (item) {
                    return _react2.default.createElement(_googleMapsReact.Marker, { key: item.id, position: item.position, icon: window.google && {
                            url: 'https://www.rekola.cz/modules/api/icons/generated/pin-normal-bike-1x.png',
                            anchor: new window.google.maps.Point(17, 29)
                        } });
                })
            );
        }
    }]);

    return MapContainer;
}(_react2.default.Component);

exports.default = (0, _googleMapsReact.GoogleApiWrapper)({
    apiKey: 'AIzaSyCUA9KFHim6A5KYK0iRntdDanc4paKmBvg'
})(MapContainer);

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("google-maps-react");

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _ = __webpack_require__(15);

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _2.default.map(function (item) {
    if (item.id === 3) {
        return _extends({}, item, {
            position: {
                "lat": 50.075022,
                "lng": 14.407627
            }
        });
    } else if (item.id === 4) {
        return _extends({}, item, {
            position: {
                "lat": 50.089320,
                "lng": 14.410765
            }
        });
    } else if (item.id === 5) {
        return _extends({}, item, {
            position: {
                "lat": 50.087338,
                "lng": 14.415043
            }
        });
    } else {
        return item;
    }
});

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This is referenced in src/containers/About.tsx as an alias example
// You can change the alias to this path inside tsconfig.json -> paths
// Add aliases to import legacy code or existing ts/js components.
var helloFromThePast = _react2.default.createElement(
    'h4',
    null,
    'TypeScript is enabled. Use it when and where you want. This text was imported via a TypeScript alias.'
);
exports.default = helloFromThePast;

/***/ }),
/* 38 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
});
//# sourceMappingURL=static.83e01b79.js.map