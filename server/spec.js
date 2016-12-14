require('dotenv').config({path: './.testenv'});

var request = require("request");
var db = require('./helpers/db-connect');

var dbHelpers = require('./helpers/db-helpers')(db);

beforeEach( function(done) {
  return dbHelpers.resetDatabase().then(function () {
    return dbHelpers.createEmployee({
      name: 'test',
      start_date: '12/1/2016',
      active: true,
      email: 'test@test.com',
      mobile: '4155555555'
    }).then(done);
  });
});

describe("Standup Server", function() {
  describe('GET /api/employees', function() {
    beforeEach(function(done) {
      return dbHelpers.createEmployee({
        name: 'inactive',
        start_date: '12/1/2016',
        active: false,
        email: 'inactive@test.com',
        mobile: '4155555555'
      }).then(done);
    });
    it('returns status code 200 and all active employees', function(done) {
      request.get(serverUrl + "/api/employees", function(error, response, body) {
        const data = JSON.parse(body);
        expect(response.statusCode).toBe(200);
        expect(data.length).toEqual(1);
        expect(data[0].name).toEqual('test');
        expect(data[0].active).toEqual(true);
        expect(data[0].email).toEqual('test@test.com');
        expect(data[0].mobile).toEqual('4155555555');
        done();
      });
    });
  });

  describe("PUT /api/employees/:id/inactive", function() {
    it("returns status code 204 makes the the corresponding employee inactive", function(done) {
      dbHelpers.getActiveEmployees().then(function (activeEmployees) {
        expect(activeEmployees.length).toEqual(1);
        request.put(serverUrl + "/api/employees/1/inactive", function(error, response) {
          expect(response.statusCode).toBe(204);
          dbHelpers.getActiveEmployees().then(function (data) {
            expect(data.length).toEqual(0);
            done();
          });
        });
      });
    });
  });

  describe("POST /api/employees/new", function() {
    it("returns status code 201 and makes the the corresponding employee inactive", function(done) {
      var newEmployee = {
        name: 'jasmine',
        start_date: '12/2/2016',
        active: true,
        email: 'jasmine@test.com',
        mobile: '415555555'
      };

      dbHelpers.getActiveEmployees().then(function (activeEmployees) {
        expect(activeEmployees.length).toEqual(1);
        request.post({url: serverUrl + "/api/employees/new", body: newEmployee, json: true}, function(error, response) {
          expect(response.statusCode).toBe(201);
          dbHelpers.getActiveEmployees().then(function (data) {
            expect(data.length).toEqual(2);
            expect(data[1].name).toEqual('jasmine');
            expect(data[1].email).toEqual('jasmine@test.com');
            expect(data[1].mobile).toEqual('415555555');
            done();
          });
        });
      });
    });
  });
});