const mariadb = require("mariadb");

const pool = mariadb.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    connectionLimit: 5
});

// Connect

pool.getConnection((err, connection) => {
    if(err){
        if(err.code === 'PROTOCOL_CONNECTION_LOST'){
            console.error("DB connection LOST!!!")
        }
        if(err.code === 'ER_CON_COUNT_ERROR'){
            console.error("DB has too many connections")
        }
        if(err.code === 'ECONNREFUSED'){
            console.error("DB connection has been refused")
        }
    }

    if(connection) connection.release();


});

module.exports = pool;