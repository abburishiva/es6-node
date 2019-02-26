'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mocha = require('mocha');

var _mocha2 = _interopRequireDefault(_mocha);

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiHttp = require('chai-http');

var _chaiHttp2 = _interopRequireDefault(_chaiHttp);

var _app = require('../../app.js');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

_chai2.default.use(_chaiHttp2.default);
var expect = _chai2.default.expect;

var MochaConfig = function MochaConfig() {
    _classCallCheck(this, MochaConfig);

    this.chai = _chai2.default;
    this.expect = expect;
    this.app = _app2.default;
};

exports.default = new MochaConfig();