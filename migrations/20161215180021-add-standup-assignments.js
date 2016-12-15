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
  return db.createTable( 'standup_assignments',
    {
      id: { type: 'bigserial', primaryKey: true },
      employee_id: {
        type: 'bigserial',
        foreignKey: {
          name: 'employee_id_fk',
          table: 'employees',
          rules: {
            onDelete: 'CASCADE',
            onUpdate: 'RESTRICT'
          },
          mapping: 'id'
        }
      },
      standup_id: {
        type: 'bigserial',
        foreignKey: {
          name: 'standup_id_fk',
          table: 'standups',
          rules: {
            onDelete: 'CASCADE',
            onUpdate: 'RESTRICT'
          },
          mapping: 'id'
        }
      },
    });
};

exports.down = function(db) {
  return db.dropTable('standup_assignments');
};

exports._meta = {
  "version": 1
};
