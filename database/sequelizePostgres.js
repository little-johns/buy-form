const Sequelize = require('sequelize');
const StockModel = require('./StockPostgres');
const config = require('./postgresConfig');

const sequelize = new Sequelize('littlejohnstocks', 'postgres', config.password, {
  host: 'localhost',
  dialect: 'postgres'
});

StockModel(sequelize, Sequelize)

sequelize.sync({ force: true })
  .then(() => {
    console.log('Database & tables created!')
  })

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection established succesfully, bud.')
  })
  .catch(err => {
    console.log(err);
  });