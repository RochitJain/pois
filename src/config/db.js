const {Pool} = require('pg')

// const pool = new Pool({
//     max: 10,
//     user: 'postgres',
//     host: 'localhost',
//     database: 'pois',
//     password: 'postgres',
//     port: 5432
// })

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
})
module.exports = pool