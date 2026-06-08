//Task 1: Student Result Checker
var marks = prompt("Enter your marks:");
if (marks >= 90) {
    console.log("Grade: A");
} else if (marks >= 80) {
    console.log("Grade: B");
} else if (marks >= 70) {
    console.log("Grade: C");
} else if (marks >= 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}
//Task 2: Employee Bonus Calculator
let salary = parseFloat(prompt("Enter your salary:"));
let bonus = 0;

if (salary > 20000) {
    bonus = salary * 0.1; // 10% bonus
} else {
    bonus = salary * 0.05; // 5% bonus
}

console.log("Employee Bonus: $" + bonus);
console.log("Total Salary with Bonus: $" + (salary + bonus));
//Task 3: User Login Validation
var username = prompt("Enter your E-mail:");
var password = prompt("Enter your password:");
if (username === "admin@gmail.com" && password === "12345") {
    console.log("Login successful!");
} else {
    console.log("Invalid username or password.");
}
//Task 4: Product Discount Calculator
var productPrice = parseFloat(prompt("Enter the product price:"));
var discount = 0;

if (productPrice >= 1000) {
    discount = productPrice * 0.2; // 20% discount
} else {
    discount = productPrice * 0.05; // 5% discount
}

console.log("Discount: $" + discount);
console.log("Total Price after discount: $" + (productPrice - discount));
//Task 5: Array Product Management
var products = ["Laptop","Mobile","Mouse","Keyboard"];
console.log("Products: " + products);
console.log("First Product: " + products[0]);
console.log("Last Product: " + products[products.length - 1]);
products.push("Headphones");
console.log("Updated Products: " + products);
console.log("Total Number of Products: " + products.length);
//Task 6: Employee Object
var employee = {
    name:"Naveen",
    department:"Development",
    salary:30000
}
console.log("Employee overall Details: " + employee.name + ", " + employee.department + ", $" + employee.salary);
console.log("Employee Name: " + employee.name);
console.log("Employee Salary: $" + employee.salary);

//Task 7: E-Commerce Cart Total
var cart = [
    { name: "shirt", price: 500 },
    { name: "pant", price: 1000 },
    { name: "shoe", price: 1500 }
];
var total = 0;
for (var i = 0; i < cart.length; i++) {
    total += cart[i].price;
}
console.log("Cart Total: $" + total);
var TotalDiscount = 0;
TotalDiscount = total * 0.1; // 10% discount
console.log("Total Discount: $" + TotalDiscount);
console.log("Total Price after discount: $" + (total - TotalDiscount));
//Task 8: Age Eligibility Checker
var age = parseInt(prompt("Enter your age:"));
if (age >= 18) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote.");
}
//Task 9: Increment Decrement Practice
var num = 5;
console.log("Original number: " + num);
num++;console.log("After increment: " + num);
++num;console.log("After pre-increment: " + num);
num--;console.log("After decrement: " + num);
--num;console.log("After pre-decrement: " + num);
//Task 10: Mini Employee Attendance System
let employeeName = prompt("Enter employee name:");
let attendance = prompt("Is the employee present? (yes/no):");
let CompletedTask = prompt("Has the employee completed the task? (yes/no):");
if (attendance.toLowerCase() === "yes" && CompletedTask.toLowerCase() === "yes") {
    console.log(employeeName + " is present and has completed the task.");
} else if (attendance.toLowerCase() === "yes" && CompletedTask.toLowerCase() === "no") {
    console.log(employeeName + " is present but has not completed the task.");
} else {
    console.log(employeeName + " is absent.");
}