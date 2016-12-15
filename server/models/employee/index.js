var Sequelize = require('sequelize');
var sequelize = require('../../helpers/db-connect');

var Employee = sequelize.define('employees', {
  name: {
    type: Sequelize.STRING,
  },
  active: {
    type: Sequelize.BOOLEAN
  },
  email: {
    type: Sequelize.STRING
  },
  mobile: {
    type: Sequelize.STRING
  },
}, {
  freezeTableName: true // Model tableName will be the same as the model name
});

module.exports = Employee;