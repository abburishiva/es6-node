import config from './config/mochaConfig';

describe('SUBJECT', () => {
    it('TEST_FOR_BASIC_GET_ALL_SUBJECTS', () => {
        return config.chai.request(config.app).get('/v1/subjects')
            .then(res => {
                config.expect(res.statusCode).to.equal(200);
                config.expect(res.headers).to.have.property("content-type", "application/json; charset=utf-8");
            });
    });
});