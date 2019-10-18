const { Pool } = require('pg')

const connectionString = 'postgresql://postgres:@localhost:5432/prova'

const pool = new Pool({
  connectionString: connectionString,
})

module.exports = pool