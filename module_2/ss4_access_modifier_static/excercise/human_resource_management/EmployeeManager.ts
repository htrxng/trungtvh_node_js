import {Employee} from "./Employee";

class EmployeeManager {
    static employeeList: Employee[] = [];

    displayEmployeeList() {
        let employeeList = EmployeeManager.employeeList;
        console.log("===Danh sách nhân viên===");
        for (let i = 0; i < employeeList.length; i++) {
            console.log(employeeList[i].getInfo())
        }
    }

    addNewEmployee(employee: Employee) {
        EmployeeManager.employeeList.push(employee);
    }


    viewDetail(employee: Employee) {
        console.log(employee.getInfo());
    }

    deleteEmployeeByIndex(index: number) {
        EmployeeManager.employeeList.splice(index, 1);
    }

}

let employeeManager = new EmployeeManager();
employeeManager.addNewEmployee(new Employee("Tran", "Trung", "18-08-1988", "Hue", "Tutor"));
employeeManager.addNewEmployee(new Employee("Tran", "Toan", "14-04-2004", "Hue", "Student"));
employeeManager.displayEmployeeList();
employeeManager.viewDetail(EmployeeManager.employeeList[0]);
employeeManager.deleteEmployeeByIndex(0);
employeeManager.displayEmployeeList();
