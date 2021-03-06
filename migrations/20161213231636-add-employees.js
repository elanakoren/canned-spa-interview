'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db) {
  return db.createTable('employees', {
    name: 'string',
    start_date: 'date',
    active: 'boolean',
    email: 'string',
    mobile: 'string',
    id: { type: 'bigserial', primaryKey: true }
  });
};

exports.down = function(db) {
  return db.dropTable('employees');
};

exports._meta = {
  "version": 1
};
