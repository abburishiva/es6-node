import mocha from 'mocha';
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../app.js';

chai.use(chaiHttp);
const expect = chai.expect;

class MochaConfig {
    constructor() {
        this.chai = chai;
        this.expect = expect;
        this.app = app;
    }
}

export default new MochaConfig();