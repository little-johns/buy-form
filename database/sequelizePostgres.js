const Sequelize = require('sequelize');
const StockModel = require('./StockPostgres');

const sequelize = new Sequelize('littlejohnstocks', 'postgres', '071396', {
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