"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _mySqlConnection = require("../utils/db/mySqlConnection");

var _mySqlConnection2 = _interopRequireDefault(_mySqlConnection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SubjectModel = function () {
    function SubjectModel() {
        _classCallCheck(this, SubjectModel);

        this.dbMySQL = _mySqlConnection2.default;
        this.tableOnly = "select s.*,CASE s.flag WHEN 0 THEN 'false' WHEN 1 THEN 'true' END AS flag ,DATE_FORMAT(s.lastmoddatetime,'%b %d %Y %h:%i %p') as lastmoddatetime from  subject s,common_category cc where s.categoryid=cc.id";
        this.deatailTableSQL = "s.id, s.name, s.description ,s.mode ,s.template,s.test_framework ,s.codemirror_theme, s.icon_class,cc.id as common_category__id,cc.name as common_category__name, cc.display_name as common_category__display_name, cc.entityid as common_category__entityid,cc.description as common_category__description,cc.enabled as common_category__enabled";
        this.tableWithDependenciesSQL = this.tableOnly.replace("s.*", this.deatailTableSQL);
    }

    _createClass(SubjectModel, [{
        key: "find",
        value: function find(callback) {
            this.dbMySQL.query(this.tableOnly, function (err, results) {
                callback(err, results);
            });
        }
    }]);

    return SubjectModel;
}();

exports.default = new SubjectModel();