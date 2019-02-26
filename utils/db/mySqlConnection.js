import mysql from 'mysql';
import config from '../../config/config';

const connection = mysql.createPool({
    host: config.dev.mysql.host,
    port: config.dev.mysql.port,
    user: config.dev.mysql.username,
    password: config.dev.mysql.password,
    database: config.dev.mysql.database
});

export default connection;