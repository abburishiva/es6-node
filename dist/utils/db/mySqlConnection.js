'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mysql = require('mysql');

var _mysql2 = _interopRequireDefault(_mysql);

var _config = require('../../config/config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var connection = _mysql2.default.createPool({
    host: _config2.default.dev.mysql.host,
    port: _config2.default.dev.mysql.port,
    user: _config2.default.dev.mysql.username,
    password: _config2.default.dev.mysql.password,
    database: _config2.default.dev.mysql.database
});

exports.default = connection;