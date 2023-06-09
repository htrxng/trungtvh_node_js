var Gender;
(function (Gender) {
    Gender[Gender["MALE"] = 0] = "MALE";
    Gender[Gender["FEMALE"] = 1] = "FEMALE";
    Gender[Gender["OTHER"] = 2] = "OTHER";
})(Gender || (Gender = {}));
var Employee = /** @class */ (function () {
    function Employee(fullname, gender, birthday, email, phoneNumber) {
        this.fullname = "";
        this.gender = Gender.OTHER;
        this.email = "";
        this.phoneNumber = "";
        this.fullname = fullname;
        this.gender = gender;
        this.birthday = birthday;
        this.email = email;
        this.fullname = fullname;
        this.phoneNumber = phoneNumber;
    }
    return Employee;
}());
var employeeList = [];
function showEmployee(employee) {
    console.log(employee);
}
function addNewEmployee(newEmployee) {
    employeeList.push(newEmployee);
    console.log("thêm thành công nhân viên mới " + newEmployee.fullname);
}
function deleteEmployeeByIndex(index) {
    if (index > employeeList.length || index < 0) {
        console.log("index truyền vào ko phù hợp với mảng");
    }
    else {
        employeeList.splice(index, 1);
        console.log("Xoá thành công nhân viên.");
    }
}
addNewEmployee(new Employee("Huu Trung", Gender.MALE, new Date("1975-03-15"), "htrung@gmail.com", "09123131231"));
employeeList.forEach(showEmployee);
addNewEmployee(new Employee("Nguyen Van A", Gender.MALE, new Date("1990-09-19"), "anguyen@gmail.com", "0123456789"));
addNewEmployee(new Employee("Tran Thi A", Gender.FEMALE, new Date("1991-10-12"), "btran@gmail.com", "0123456790"));
addNewEmployee(new Employee("Huynh An Nhien", Gender.OTHER, new Date("1990-09-19"), "nhienhuynh@gmail.com", "0123456791"));
deleteEmployeeByIndex(0);
employeeList.forEach(showEmployee);
