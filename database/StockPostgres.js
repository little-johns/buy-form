module.exports = (sequelize, type) => {
  return sequelize.define('stock', {
      id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      ticker: type.STRING,
      price: type.INTEGER
  }, {timestamps: false})
}