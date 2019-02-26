'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _index = require('./routes/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function () {
    function App() {
        _classCallCheck(this, App);

        this.express = (0, _express2.default)();
        this.dataCarriers();
        this.mountRoutes();
        this.headers();
    }

    _createClass(App, [{
        key: 'dataCarriers',
        value: function dataCarriers() {
            this.express.use(_bodyParser2.default.urlencoded({ extended: false }));
            this.express.use(_bodyParser2.default.json());
        }
    }, {
        key: 'headers',
        value: function headers() {
            this.express.use(function (req, res, next) {
                if (req.url.substr(-1) === '/') {
                    return res.send({
                        message: "Welcome To TalentScreen!"
                    });
                }
                next();
            });
        }
    }, {
        key: 'mountRoutes',
        value: function mountRoutes() {
            this.express.use('/v1', _index2.default);
        }
    }]);

    return App;
}();

exports.default = new App().express;