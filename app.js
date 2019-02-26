import express from 'express'
import bodyParser from 'body-parser';
import routes from './routes/index';

class App {
    constructor() {
        this.express = express();
        this.dataCarriers();
        this.mountRoutes();
        this.headers();
    }

    dataCarriers() {
        this.express.use(bodyParser.urlencoded({ extended: false }));
        this.express.use(bodyParser.json());
    }

    headers() {
        this.express.use(function (req, res, next) {
            if (req.url.substr(-1) === '/') {
                return res.send({
                    message: "Welcome To TalentScreen!"
                });
            }
            next();
        });
    }


    mountRoutes() {
        this.express.use('/v1', routes)
    }
}

export default new App().express