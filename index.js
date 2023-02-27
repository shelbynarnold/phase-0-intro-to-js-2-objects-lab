// Write your solution in this file!

const employee = {name: "Sam", streetAddress: "11 Broadway"}


function updateEmployeeWithKeyAndValue(employeeObj, key, value ){
    const updatedEmployee = {...employeeObj};
    updatedEmployee[key] = value;
    return updatedEmployee
};

function destructivelyUpdateEmployeeWithKeyAndValue(employeeObj, key, value) {
    employeeObj[key] = value
    return employeeObj
}

function deleteFromEmployeeByKey(employeeObj, key) {
    const updatedEmployee = {...employeeObj}
    delete updatedEmployee[key]
    return updatedEmployee
}

function destructivelyDeleteFromEmployeeByKey(employeeObj, key){
    delete employeeObj[key]
    return employeeObj
}