const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'qap3db_fs',
    password: 'postgres',
    port: 5432,
});

module.exports = {
    query: (text, params) => pool.query(text, params),
};
