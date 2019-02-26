import subjectModel from '../models/subject';

class SubjectsController {
    get(req, res) {
        subjectModel.find((err, result) => {
            res.status(200).json(result);
        });
    };
}

export default new SubjectsController();