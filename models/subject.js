import connection from '../utils/db/mySqlConnection';

class SubjectModel {

    constructor() {
        this.dbMySQL = connection;
        this.tableOnly = "select s.*,CASE s.flag WHEN 0 THEN 'false' WHEN 1 THEN 'true' END AS flag ,DATE_FORMAT(s.lastmoddatetime,'%b %d %Y %h:%i %p') as lastmoddatetime from  subject s,common_category cc where s.categoryid=cc.id";
        this.deatailTableSQL = "s.id, s.name, s.description ,s.mode ,s.template,s.test_framework ,s.codemirror_theme, s.icon_class,cc.id as common_category__id,cc.name as common_category__name, cc.display_name as common_category__display_name, cc.entityid as common_category__entityid,cc.description as common_category__description,cc.enabled as common_category__enabled";
        this.tableWithDependenciesSQL = this.tableOnly.replace("s.*", this.deatailTableSQL);
    }

    find(callback) {
        this.dbMySQL.query(this.tableOnly, (err, results) => {
            callback(err, results);
        });
    }
}


export default new SubjectModel();