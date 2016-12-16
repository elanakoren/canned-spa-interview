var Sequelize = require('sequelize');
var sequelize = require('../../helpers/db-connect');

var StandupOccurance = sequelize.define('standup_occurances', {
  date: {
    type: Sequelize.DATE
  }
}, {
  freezeTableName: true // Model tableName will be the same as the model name
});

module.exports = StandupOccurance;