'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _subject = require('../controller/subject');

var _subject2 = _interopRequireDefault(_subject);

var _middleAuth = require('../utils/auth/middleAuth');

var _middleAuth2 = _interopRequireDefault(_middleAuth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/', _middleAuth2.default, _subject2.default.get);

exports.default = router;