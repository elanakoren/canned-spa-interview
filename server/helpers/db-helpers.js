module.exports = function dbHelper(db) {
  return {
    resetDatabase() {
      return db.none('TRUNCATE TABLE employees RESTART IDENTITY');
    },

    createEmployee(employeeData) {
      return db.query("INSERT INTO employees VALUES(${name}, ${start_date}, ${active}, ${email}, ${mobile})", employeeData);
    },

    getEmployees() {
      return db.query("select * from employees");
    },

    getEmployee(id) {
      return db.query("select * from employees where id=$1", [id]);
    }
  };
};
