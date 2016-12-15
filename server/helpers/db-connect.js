var Sequelize = require("sequelize");

var sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    logging: false,
    define: {
      timestamps: false
    }
  });

module.exports = sequelize;