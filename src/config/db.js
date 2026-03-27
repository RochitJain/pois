const {Pool} = require('pg')

const pool = new Pool({
    max: 10,
    user: 'postgres',
    host: 'localhost',
    database: 'pois',
    password: 'postgres',
    port: 5432
})

module.exports = pool