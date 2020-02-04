let mySql = require('mysql');

let conn = mySql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'express_restapi_testing'
});

conn.connect((err) => {
    if(err) {
        console.log(err);
    }
});

module.exports = conn;