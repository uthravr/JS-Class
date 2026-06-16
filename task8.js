// Based on the concepts covered in your code (Functions, Arrays, Objects, Loops, HOFs, Async, Promises, String Methods, Date, Destructuring, etc.), here are some real-time tasks for your team.
// Task 1: Employee Salary Management
// Concepts: Array, Object, filter(), find(), reduce(), map()
// Create an employee database:
// [
//  {id:1,name:"Rahul",salary:25000},
//  {id:2,name:"Kavin",salary:50000},
//  {id:3,name:"John",salary:75000}
// ]
// Requirements:
// Find employees whose salary is above ₹40,000.
// Find the first employee whose salary is above ₹60,000.
// Calculate total company salary expense.
// Create a new array containing only employee names.
// Task 2: College Admission Form
// Concepts: Function, If-Else, Object
// Take:
// Name
// Age
// Percentage
// Requirements:
// Check eligibility.
// Age must be 18+.
// Percentage must be 60+.
// Return admission status.
// Task 3: E-Commerce Cart
// Concepts: Array Methods, reduce(), Object
// Cart:
// [
//  {product:"Shoes",price:2000,qty:2},
//  {product:"Watch",price:1500,qty:1},
//  {product:"Bag",price:1000,qty:3}
// ]
// Requirements:
// Calculate total bill.
// Find the most expensive product.
// Display all product names.
// Task 4: Traffic Fine System
// Concepts: Switch Case
// Inputs:
// red
// yellow
// green
// Requirements:
// Display corresponding action.
// Add fine amount for rule violations.
// Task 5: Student Result Processing
// Concepts: Array, Object, filter(), map()
// Students:
// [
//  {name:"A",mark:95},
//  {name:"B",mark:45},
//  {name:"C",mark:80},
//  {name:"D",mark:30}
// ]
// Requirements:
// Find passed students.
// Find failed students.
// Create grade list.
// Task 6: Online Food Delivery
// Concepts: Function, Rest Operator
// Create order function:
// placeOrder(customerName,...items)
// Requirements:
// Display customer name.
// Display ordered items.
// Calculate item count.
// Task 7: Bank Account System
// Concepts: Function, Return
// Functions:
// deposit()
// withdraw()
// checkBalance()
// Requirements:
// Maintain account balance.
// Return updated balance after every transaction.
// Task 8: Movie Ticket Booking
// Concepts: Loop, Array
// Requirements:
// Store booked seats.
// Check seat availability.
// Print all booked seats.
// Task 9: User Login Validation
// Concepts: String Methods, If-Else
// Requirements:
// Username should not contain spaces.
// Password minimum 8 characters.
// Check if email contains "@".
// Task 10: Product API Dashboard
// Concepts: fetch(), Promise, forEach()
// API:
// https://fakestoreapi.com/products
// Requirements:
// Fetch products.
// Display product titles.
// Find products above ₹1000.
// Count total products.
// Task 11: Birthday Day Finder
// Concepts: Date Object
// Requirements:
// User enters DOB.
// Display:
// Day
// Month
// Year
// Weekday Name
// Task 12: Netflix Subscription System
// Concepts: Ternary Operator
// Requirements:
// User enters plan.
// Show:
// Mobile
// Basic
// Standard
// Premium
// Display plan benefits using ternary operators.
// Task 13: Hospital Patient Management
// Concepts: Array of Objects, filter(), find()
// Requirements:
// Find critical patients.
// Find patient by ID.
// Count total patients.
// Task 14: Inventory Management System
// Concepts: Destructuring, Spread Operator
// Requirements:
// Merge two inventory arrays.
// Extract product details using destructuring.
// Add new products using spread operator.
// Task 15: WhatsApp Group Management
// Concepts: push(), pop(), shift(), unshift(), splice()
// Requirements:
// Add members.
// Remove members.
// Insert member at specific position.
// Display final group list.
//Task 1: Employee Salary Management
var employees = [
    { id: 1, name: "Rahul", salary: 25000 },
    { id: 2, name: "Kavin", salary: 50000 },
    { id: 3, name: "John", salary: 75000 }];
var highEarners = employees.filter(function (employee) {
    return employee.salary > 40000;
});
console.log("Employees with salary above ₹40,000:");
highEarners.forEach(function (employee) {
    console.log("ID: " + employee.id + ", Name: " + employee.name + ", Salary: ₹" + employee.salary);
});
var firstHighEarner = employees.find(function (employee) {
    return employee.salary > 60000;
});
if (firstHighEarner) {
    console.log("First employee with salary above ₹60,000: " + firstHighEarner.name);
}
else {
    console.log("No employee found with salary above ₹60,000.");
}
var totalSalaryExpense = employees.reduce(function (total, employee) {
    return total + employee.salary;
}, 0);
console.log("Total company salary expense: ₹" + totalSalaryExpense);
var employeeNames = employees.map(function (employee) {
    return employee.name;
});
console.log("Employee Names: " + employeeNames.join(", "));
// Task 2: College Admission Form
function checkAdmissionEligibility(name, age, percentage) {
    if (age >= 18 && percentage >= 60) {
        console.log(name + " is eligible for admission.");
    }
    else {
        console.log(name + " is not eligible for admission.");
    }
}
checkAdmissionEligibility("Alice", 19, 85);
checkAdmissionEligibility("Bob", 17, 78);
checkAdmissionEligibility("Charlie", 20, 92);
// Task 3: Online Shopping Cart
var cart = [
    { id: 1, name: "Laptop", price: 8000 },
    { id: 2, name: "T-Shirt", price: 500 },
    { id: 3, name: "Headphones", price: 1000 }];
function addToCart(item) {
    cart.push(item);
    console.log(item.name + " added to cart.");
}
addToCart({ id: 4, name: "Jeans", price: 1500 });
addToCart({ id: 5, name: "Shoes", price: 1200 });
console.log("Shopping Cart:");
cart.forEach(function (item) {
    console.log("ID: " + item.id + ", Name: " + item.name + ", Price: ₹" + item.price);
});
var totalBill = cart.reduce(function (total, item) {
    return total + item.price;
}, 0);
console.log("Total Bill: ₹" + totalBill);
// Task 4: Online Shopping Cart
var cart = [];
function addToCart(item) {
    cart.push(item);
    console.log(item.name + " added to cart.");
}
addToCart({ id: 1, name: "Laptop", price: 8000 });
addToCart({ id: 2, name: "T-Shirt", price: 500 });
addToCart({ id: 3, name: "Headphones", price: 1000 });
console.log("Shopping Cart:");
cart.forEach(function (item) {
    console.log("ID: " + item.id + ", Name: " + item.name + ", Price: ₹" + item.price);
});
var totalBill = cart.reduce(function (total, item) {
    return total + item.price;
}, 0);
console.log("Total Bill: ₹" + totalBill);
// Task 5: Online Shopping Cart
var cart = [];
function addToCart(item) {
    cart.push(item);
    console.log(item.name + " added to cart.");
}
addToCart({ id: 1, name: "Laptop", price: 8000 });
addToCart({ id: 2, name: "T-Shirt", price: 500 });
addToCart({ id: 3, name: "Headphones", price: 1000 });
console.log("Shopping Cart:");
cart.forEach(function (item) {
    console.log("ID: " + item.id + ", Name: " + item.name + ", Price: ₹" + item.price);
});
var totalBill = cart.reduce(function (total, item) {
    return total + item.price;
}, 0);
console.log("Total Bill: ₹" + totalBill);
// Task 6: Online Shopping Cart
var cart = [];
function addToCart(item) {
    cart.push(item);
    console.log(item.name + " added to cart.");
}
addToCart({ id: 1, name: "Laptop", price: 8000 });
addToCart({ id: 2, name: "T-Shirt", price: 500 });
addToCart({ id: 3, name: "Headphones", price: 1000 });
console.log("Shopping Cart:");
cart.forEach(function (item) {
    console.log("ID: " + item.id + ", Name: " + item.name + ", Price: ₹" + item.price);
});
var totalBill = cart.reduce(function (total, item) {
    return total + item.price;
}, 0);
console.log("Total Bill: ₹" + totalBill);
// Task 7: Online Shopping Cart
var cart = [];
function addToCart(item) {
    cart.push(item);
    console.log(item.name + " added to cart.");
}
addToCart({ id: 1, name: "Laptop", price: 8000 });
addToCart({ id: 2, name: "T-Shirt", price: 500 });
addToCart({ id: 3, name: "Headphones", price: 1000 });
console.log("Shopping Cart:");
cart.forEach(function (item) {
    console.log("ID: " + item.id + ", Name: " + item.name + ", Price: ₹" + item.price);
});
var totalBill = cart.reduce(function (total, item) {
    return total + item.price;
}, 0);
console.log("Total Bill: ₹" + totalBill);
// Task 8: Movie Ticket Booking
var bookedSeats = ["A1", "A2", "B1"];
var totalSeats = 50;
var availableSeats = totalSeats - bookedSeats.length;
console.log("Total Seats: " + totalSeats);
console.log("Available Seats: " + availableSeats);
console.log("Booked Seats: " + bookedSeats.length);
// Task 9: User Login Validation
var username = "admin";
var password = "12345";
var email = "admin@example.com";
var inputUsername = prompt("Enter your username:");
var inputPassword = prompt("Enter your password:");
varinputEmail = prompt("Enter your email:");
if (inputUsername === username && inputPassword === password && inputEmail === email) {
    console.log("Login successful!");
} else {
    console.log("Invalid username, password, or email.");
}
// Task 10: Product API Dashboard
fetch("https://fakestoreapi.com/products")
    .then(function (response) {
    return response.json();
})
    .then(function (products) {
    console.log("Product Titles:");
    products.forEach(function (product) {
        console.log(product.title);
    });
    var highPriceProducts = products.filter(function (product) {
        return product.price > 1000;
    });
    console.log("Products above ₹1000:");
    highPriceProducts.forEach(function (product) {
        console.log(product.title);
    });
    var totalProducts = products.length;
    console.log("Total Products: " + totalProducts);
});
// Task 11: Birthday Day Finder
var dobInput = prompt("Enter your date of birth (YYYY-MM-DD):");
var dob = new Date(dobInput);
var day = dob.getDate();
var month = dob.getMonth() + 1;
var year = dob.getFullYear();
var weekdayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var weekday = weekdayNames[dob.getDay()];
console.log("Date of Birth: " + dobInput);
console.log("Day: " + day);
console.log("Month: " + month);
console.log("Year: " + year);
console.log("Weekday: " + weekday);
// Task 12: Netflix Subscription System
var plan = prompt("Enter your Netflix plan (Mobile, Basic, Standard, Premium):");
var benefits = plan === "Mobile" ? "Watch on 1 mobile device" :
    plan === "Basic" ? "Watch on 2 mobile devices" :
        plan === "Standard" ? "Watch on 4 mobile devices" :
            plan === "Premium" ? "Watch on 6 mobile devices" :
                "Invalid plan";
console.log("Your Netflix plan is: " + plan);
console.log("Benefits: " + benefits);
// Task 13: Hospital Patient Management
var patients = [
    { id: 1, name: "Alice", condition: "Critical" },
    { id: 2, name: "Bob", condition: "Serious" },
    { id: 3, name: "Charlie", condition: "Mild" }];
var criticalPatients = patients.filter(function (patient) {
    return patient.condition === "Critical";
});
console.log("Critical Patients:");
criticalPatients.forEach(function (patient) {
    console.log("ID: " + patient.id + ", Name: " + patient.name);
});
var patientIdToFind = 2;
var foundPatient = patients.find(function (patient) {
    return patient.id === patientIdToFind;
});
if (foundPatient) {
    console.log("Patient found: ID: " + foundPatient.id + ", Name: " + foundPatient.name + ", Condition: " + foundPatient.condition);
}
else {
    console.log("Patient with ID " + patientIdToFind + " not found.");
}
var totalPatients = patients.length;
console.log("Total Patients: " + totalPatients);
// Task 14: Inventory Management System
var inventory1 = [
    { id: 1, name: "Laptop", quantity: 10 },
    { id: 2, name: "Mobile", quantity: 20 },
    { id: 3, name: "Tablet", quantity: 15 }];
var inventory2 = [
    { id: 4, name: "Headphones", quantity: 30 },
    { id: 5, name: "Smartwatch", quantity: 25 }];
var mergedInventory = inventory1.concat(inventory2);
console.log("Merged Inventory:");
mergedInventory.forEach(function (item) {
    console.log("ID: " + item.id + ", Name: " + item.name + ", Quantity: " + item.quantity);
});
var _a = mergedInventory[0], id = _a.id, name = _a.name, quantity = _a.quantity;
console.log("Extracted Product Details:");
console.log("ID: " + id + ", Name: " + name + ", Quantity: " + quantity);
var newProduct = { id: 6, name: "Camera", quantity: 5 };
var updatedInventory = __spreadArray(__spreadArray([], mergedInventory, true), [newProduct], false);
console.log("Updated Inventory:");
updatedInventory.forEach(function (item) {
    console.log("ID: " + item.id + ", Name: " + item.name + ", Quantity: " + item.quantity);
});
// Task 15: WhatsApp Group Management
var groupMembers = ["Alice", "Bob", "Charlie"];
console.log("Initial Group Members: " + groupMembers.join(", "));
var newMember = "David";
groupMembers.push(newMember);
console.log("Updated Group Members: " + groupMembers.join(", "));
var removedMember = groupMembers.pop();
console.log("Removed Member: " + removedMember);
console.log("Updated Group Members: " + groupMembers.join(", "));
var firstMember = groupMembers.shift();
console.log("Removed First Member: " + firstMember);
console.log("Updated Group Members: " + groupMembers.join(", "));
var newFirstMember = "Eve";
groupMembers.unshift(newFirstMember);
console.log("Updated Group Members: " + groupMembers.join(", "));
var memberToInsert = "Frank";
var insertPosition = 1;
groupMembers.splice(insertPosition, 0, memberToInsert);
console.log("Updated Group Members: " + groupMembers.join(", "));
console.log("Final Group Members: " + groupMembers.join(", "));