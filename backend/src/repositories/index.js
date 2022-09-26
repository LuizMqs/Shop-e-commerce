const { Pool } = require('pg');
const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'luiz1235',
    database: 'shop',
    port: 5432
});

module.exports = pool