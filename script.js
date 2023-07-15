/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  const developers = arr
    .filter(employee => employee.profession === "developer")
    .map(developer => developer.name);

    console.log(developers);
}



function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach(employee => {
    if(employee.profession === "developer"){
      console.log(employee);
    }
  });
}



function addData() {
  //Write your code here, just console.log
  const newEmployee = {id: 4, naem: "susan", age: "20", profession: "intern"};
  arr.push(newEmployee);

  console.log(arr);
}



function removeAdmin() {
  //Write your code here, just console.log
  const filteredEmployees = arr.filter(employee => employee.profession !== "admin");

  console.log(filteredEmployees);
}



function concatenateArray() {
  //Write your code here, just console.log

  const additionalArray = [
    { id: 5, name: "emma", age: "22", profession: "designer" },
    { id: 6, name: "mike", age: "21", profession: "manager" },
    { id: 7, name: "lisa", age: "23", profession: "engineer" }
  ];

  const concatenatedArray = arr.concat(additionalArray);

  console.log(concatenatedArray);
}


