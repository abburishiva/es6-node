'use strict';

var _mochaConfig = require('./config/mochaConfig');

var _mochaConfig2 = _interopRequireDefault(_mochaConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('SUBJECT', function () {
    it('TEST_FOR_BASIC_GET_ALL_SUBJECTS', function () {
        return _mochaConfig2.default.chai.request(_mochaConfig2.default.app).get('/v1/subjects').then(function (res) {
            _mochaConfig2.default.expect(res.statusCode).to.equal(200);
            _mochaConfig2.default.expect(res.headers).to.have.property("content-type", "application/json; charset=utf-8");
        });
    });
});