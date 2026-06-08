//Task 1: Employee Salary Calculator Scenario
var BasicSalary=25000;
var HRA=BasicSalary*0.2;
var Bonus=BasicSalary*0.1;
var TotalSalary=BasicSalary+HRA+Bonus;
var Tax=TotalSalary*0.05;
console.log("Basic Salary: $" + BasicSalary);
console.log("HRA: $" + HRA);
console.log("Bonus: $" + Bonus);
console.log("Tax: $" + Tax);
var GrossSalary=BasicSalary+HRA+Bonus-Tax;
console.log("Gross Salary: $" + GrossSalary);

//Task 2: Student Grade System Scenario
var marks = prompt("Enter your marks:");
if (marks >= 90) {
    console.log("Grade: A+");
} else if (marks >= 80) {
    console.log("Grade: A");
} else if (marks >= 70) {
    console.log("Grade: B");
} else if (marks >= 60) {
    console.log("Grade: C");
} else {
    console.log("Grade: Fail");
}

//Task 3: Login Authentication System Scenario
//Nested If Logical Operators
var username = prompt("Enter your username:");
var password = prompt("Enter your password:");
if (username === "admin") {
    if (password === "12345") {
        console.log("Login successful!");
    } else {
        console.log("Invalid password.");
    }
} else {
    console.log("Invalid username");
}

//Task 4: ATM Withdrawal Machine Scenario
var accountBalance = 5000;
var withdrawalAmount = parseFloat(prompt("Enter the amount to withdraw:"));
if (withdrawalAmount <= accountBalance) {
    accountBalance -= withdrawalAmount;
    console.log("Withdrawal successful! Remaining balance: $ " + accountBalance);
} else {
    console.log("Insufficient funds. Your current balance is: $ " + accountBalance);
}

//Task 5: E-Commerce Discount System Scenario
var productPrice = parseFloat(prompt("Enter the product price:"));
var discount = 0;
if (productPrice >= 10000) {
    discount = productPrice * 0.2; // 20% discount
} else if (productPrice >= 5000) {
    discount = productPrice * 0.1; // 10% discount
} else if (productPrice >= 2000) {
    discount = productPrice * 0.05; // 5% discount
}
else {
    discount = productPrice * 0; // no discount
}
var discountedPrice = productPrice - discount;
console.log("Product Price: $" + productPrice);
console.log("Discount: $" + discount);
console.log("Discounted Price: $" + discountedPrice);

//Task 6: Traffic Fine Checker Scenario
var NoHelmetFine = 1000;
var NoLicenseFine = 2000;
if (NoHelmetFine) {
    console.log("Fine for not wearing a helmet: $" + NoHelmetFine);
}else if (NoLicenseFine) {
    console.log("Fine for not having a license: $" + NoLicenseFine);
}else if (NoHelmetFine && NoLicenseFine) {
    console.log("Fine for not wearing a helmet and not having a license: $" + (NoHelmetFine + NoLicenseFine));
}else {
    console.log("No fines applicable.");
}
//Task 7: Employee Attendance Tracker Scenario use loop
var attendance = ["P", "A", "P", "P", "A", "P", "P"];
var presentCount = 0;
var absentCount = 0;
for (var i = 0; i < attendance.length; i++) {
    if (attendance[i] === "P") {    
        presentCount++;
    } else {
        absentCount++;
    }
}
var attendancePercentage = (presentCount / attendance.length) * 100;
console.log("Attendance Percentage: " + attendancePercentage + "%");
console.log("Present: " + presentCount);
console.log("Absent: " + absentCount);

//Task 8: Product Inventory Management Scenario
var product = {
    productName: "Laptop",
    price: 50000,
    stock: 10
};
for (var key in product) {
    console.log(key + ": " + product[key]);
}

//Task 9: Cab Fare Calculator Scenario
var distance = parseFloat(prompt("Enter the distance traveled in kilometers:"));
var fare = 0;
if (distance <= 5) {
    fare = distance * 20;
} else if (distance <= 10) {
    fare = distance * 15;
} else {
    fare = distance * 10;
}
console.log("Total Fare: $" + fare);

//Task 10: Mini Employee Management System (Real Company Task) Requirements
// Create an array of employees:
// [
//  {id:1,name:"Rahul",salary:25000},
//  {id:2,name:"Kiran",salary:30000},
//  {id:3,name:"Navi",salary:40000}
// ]
// Perform:
// Print all employees
// Find employee with highest salary
// Find employee with lowest salary
// Count total employees
// Calculate total salary expenditure
// Concepts
// Array
// Object
// Loop
// Condition
let employees = [
    {id:1,name:"Rahul",salary:25000},
    {id:2,name:"Kiran",salary:30000},
    {id:3,name:"Navi",salary:40000}
];
console.log("All Employees: " + employees);
let highestSalary = employees[0].salary;
let lowestSalary = employees[0].salary;
let totalEmployees = employees.length;
let totalSalary = 0;
for (let i = 0; i < employees.length; i++) {
    if (employees[i].salary > highestSalary) {
        highestSalary = employees[i].salary;
    }
    if (employees[i].salary < lowestSalary) {
        lowestSalary = employees[i].salary;
    }
    totalSalary += employees[i].salary;
}
console.log("Highest Salary: $" + highestSalary);
console.log("Lowest Salary: $" + lowestSalary);
console.log("Total Employees: " + totalEmployees);
console.log("Total Salary: $" + totalSalary);