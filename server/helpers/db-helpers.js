module.exports = function dbHelper(db) {
  return {
    resetDatabase() {
      return db.none('TRUNCATE TABLE employees RESTART IDENTITY');
    },

    createEmployee(employeeData) {
      return db.none("INSERT INTO employees VALUES(${name}, ${start_date}, ${active}, ${email}, ${mobile})", employeeData);
    },

    getActiveEmployees() {
      return db.any("select * from employees where active=true");
    },

    getEmployee(id) {
      return db.any("select * from employees where id=$1", [id]);
    }
  };
};
