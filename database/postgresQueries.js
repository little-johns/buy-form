const Pool = require('pg').Pool
const config = require('./postgresConfig');
const redis = require('redis');
const client = redis.createClient();

client.on('connect', () => {
  console.log('redis client connected!!')
})

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
      let row = results.rows
      client.set(query, JSON.stringify(row))
      res.send(row)
    })
  }
  else {
    pool.query('SELECT * FROM stocks WHERE ticker = $1', [query], (err, results) => {
      if (err) {
        throw err
      }
      let row = results.rows
      client.set(query, JSON.stringify(row))
      res.send(row)
    })
  }
}

const getCache = (req, res) => {
  let query = req.params.query;
  client.get(query, (err, result) => {
    if (result) {
      res.send(result);
    } else {
      getStock(req, res);
    }
  })
}

module.exports = {
  getStock,
  getCache
}