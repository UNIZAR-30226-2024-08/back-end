
const mysql = require('mysql');

const pool = mysql.createPool({
    host: "casino-lotus.mysql.database.azure.com",
    user:"Roberta",
    password:"Williams8",
    database:"casino-lotus",
    port:3306
});

const query = (text, params, callback) => {
    const start = Date.now();
    pool.query(text, params, (err, res) => {
        if(err) throw err;
        const duration = Date.now() - start;
        console.log('executed query', { text, duration, rows: res ? res.length : 0 });
        
        callback(err, res);
    });
}

module.exports = {
    query
}