// Write your solution in this file!
const employee = {
    name: "Sam Jones", 
    streetAdress: "3206 Casey Ln", 
}; 

function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newObj = {...obj }; 
    newObj[key] = value; 

    return newObj; 
}
const newEmployee = updateEmployeeWithKeyAndValue(
    "name", 
    "Saul Goodman"
); 
newEmployee.name; 

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value; 
    return obj; 
}
const thirdEmployee = destructivelyUpdateEmployeeWithKeyAndValue(employee, "name", "Harry Potter"); 
thirdEmployee.name; 

function deleteFromEmployeeByKey(employee, key) {
    const newObject = Object.assign({}, employee)
    delete newObject[key] 
    return newObject
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]; 
    return employee; 
}




