require('dotenv').config({path: './.testenv'});

var request = require("request");
var Employee = require('./models/employee');

beforeEach(function (done) {
  return Employee.truncate({
    restartIdentity: true
  }).then(function () {
    return Employee.create({
      name: 'test',
      start_date: '12/1/2016',
      active: true,
      email: 'test@test.com',
      mobile: '4155555555'
    });
  }).then(function () {
    return Employee.create({
      name: 'inactive',
      start_date: '12/1/2016',
      active: false,
      email: 'inactive@test.com',
      mobile: '4155555555'
    });
  }).then(done);
});

describe("Standup Server", function () {
  describe('GET /api/employees', function () {
    it('returns status code 200 and all employees', function (done) {
      request.get(serverUrl + "/api/employees", function (error, response, body) {
        const data = JSON.parse(body);
        expect(response.statusCode).toBe(200);
        expect(data.length).toEqual(2);
        expect(data[0].name).toEqual('test');
        expect(data[0].active).toEqual(true);
        expect(data[0].email).toEqual('test@test.com');
        expect(data[0].mobile).toEqual('4155555555');
        expect(data[1].name).toEqual('inactive');
        expect(data[1].active).toEqual(false);
        expect(data[1].email).toEqual('inactive@test.com');
        expect(data[1].mobile).toEqual('4155555555');
        done();
      });
    });
  });

  xdescribe('GET /api/standups', function () {
    it('returns status code 200 and all standups', function (done) {
      request.get(serverUrl + "/api/standups", function (error, response, body) {
        const data = JSON.parse(body);
        expect(response.statusCode).toBe(200);
        expect(data.length).toEqual(2);
        expect(data[0].employees[0].name).toEqual('test');
        expect(data[0].employees[1].name).toEqual('inactive');
        expect(data[0].standup.date).toEqual('12/2/2016');
        done();
      });
    });
  });

  describe("PUT /api/employees/:id/active/:active", function () {
    it("returns status code 204 makes the the corresponding employee inactive", function (done) {
      request.put(serverUrl + "/api/employees/1/active/false", function (error, response) {
        expect(response.statusCode).toBe(204);
        Employee.findAll().then(function (employees) {
          expect(employees[0].active).toEqual(false);
          done();
        });
      });
    });

    it("returns status code 204 makes the the corresponding employee active", function (done) {
      request.put(serverUrl + "/api/employees/2/active/true", function (error, response) {
        expect(response.statusCode).toBe(204);
        Employee.findAll().then(function (employees) {
          expect(employees[1].active).toEqual(true);
          done();
        });
      });
    });
  });

  describe("POST /api/employees/new", function () {
    it("returns status code 201", function (done) {
      var newEmployee = {
        name: 'jasmine',
        start_date: '12/2/2016',
        active: true,
        email: 'jasmine@test.com',
        mobile: '415555555'
      };

      Employee.findAll().then(function (employees) {
        expect(employees.length).toEqual(2);
        request.post({
          url: serverUrl + "/api/employees/new",
          body: newEmployee,
          json: true
        }, function (error, response) {
          expect(response.statusCode).toBe(201);
          Employee.findAll().then(function (data) {
            expect(data.length).toEqual(3);
            expect(data[2].name).toEqual('jasmine');
            expect(data[2].email).toEqual('jasmine@test.com');
            expect(data[2].mobile).toEqual('415555555');
            done();
          });
        });
      });
    });
  });
});