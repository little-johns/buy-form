const Pool = require('pg').Pool
const config = require('./postgresConfig');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'littlejohnstocks',
  password: config.password,
  port: 5432,
})

const getStock = (req, res) => {
  var query = req.params.query;
  if (parseInt(query)) {
    pool.query('SELECT * FROM stocks WHERE id = $1', [query], (err, results) => {
      if (err) {
        throw err
      }
      res.send(results.rows)
    })
  }
  else {
    pool.query('SELECT * FROM stocks WHERE ticker = $1', [query], (err, results) => {
      if (err) {
        throw err
      }
      res.send(results.rows)
    })
  }
}

module.exports = {
  getStock,
}