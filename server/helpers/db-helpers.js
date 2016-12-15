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
    },

    assignEmployeeToStandup(employeeId, occurenceId) {
      return db.query("INSERT INTO standup_assignments VALUES(${employee_id}, ${occurence_id})", employeeId, occurenceId);
    },

    createStandupAssignment(standupOccurrenceData) {
      return db.query("INSERT INTO standups VALUES(${date})", standupOccurrenceData);
    },

    createStandup(standupOccurenceData) {
      getEmployee(1).then(function(employee1) {
        getEmployee(2).then(function (employee2) {
          createStandupAssignment(standupOccurenceData).then(function(standupOccurence) {
            assignEmployeeToStandup(employee1.id, standupOccurence.id);
            assignEmployeeToStandup(employee2.id, standupOccurence.id);
          })
        });
      });
    }
  }
};
