const { Pool } = require('pg'), 
pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'luiz1235',
    database: 'shop',
    port: 5432
})

pool.connect()

module.exports = pool