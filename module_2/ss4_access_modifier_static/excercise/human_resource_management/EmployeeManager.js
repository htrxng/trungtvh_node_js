"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Employee_1 = require("./Employee");
var EmployeeManager = /** @class */ (function () {
    function EmployeeManager() {
    }
    EmployeeManager.prototype.displayEmployeeList = function () {
        var employeeList = EmployeeManager.employeeList;
        console.log("===Danh sách nhân viên===");
        for (var i = 0; i < employeeList.length; i++) {
            console.log(employeeList[i].getInfo());
        }
    };
    EmployeeManager.prototype.addNewEmployee = function (employee) {
        EmployeeManager.employeeList.push(employee);
    };
    EmployeeManager.prototype.viewDetail = function (employee) {
        console.log(employee.getInfo());
    };
    EmployeeManager.prototype.deleteEmployeeByIndex = function (index) {
        EmployeeManager.employeeList.splice(index, 1);
    };
    EmployeeManager.employeeList = [];
    return EmployeeManager;
}());
var employeeManager = new EmployeeManager();
employeeManager.addNewEmployee(new Employee_1.Employee("Tran", "Trung", "18-08-1988", "Hue", "Tutor"));
employeeManager.addNewEmployee(new Employee_1.Employee("Tran", "Toan", "14-04-2004", "Hue", "Student"));
employeeManager.displayEmployeeList();
employeeManager.viewDetail(EmployeeManager.employeeList[0]);
employeeManager.deleteEmployeeByIndex(0);
employeeManager.displayEmployeeList();
