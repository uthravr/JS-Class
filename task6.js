// Task 1: Employee Bonus Calculator
var salary = parseFloat(prompt("Enter your salary:"));
var experience = parseInt(prompt("Enter your experience in years:"));
var bonus = 0;
if (experience >= 5) {
    bonus = salary * 0.2; // 20% bonus
} else if (experience >= 2) {
    bonus = salary * 0.1; // 10% bonus
} else {
    bonus = salary * 0.05; // 5% bonus
}
var finalSalary = salary + bonus;
console.log("Employee Bonus: $" + bonus);
console.log("Total Salary with Bonus: $" + finalSalary);

// Task 2: Student Result Checker
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

// Task 3: User Login Validation
var username = prompt("Enter your E-mail:");
var password = prompt("Enter your password:");
if (username === "admin@gmail.com" && password === "12345") {
    console.log("Login successful!");
} else {
    console.log("Invalid username or password!");
}

// Task 4: Mobile Recharge Offer
var rechargeAmount = parseFloat(prompt("Enter the recharge amount:"));
if (rechargeAmount >= 499) {
    console.log("Congratulations! You have received a Netflix Offer.");
} else if (rechargeAmount >= 299) {
    console.log("Congratulations! You have received 2GB Extra Data.");
} else {
    console.log("No offer available for this recharge amount.");
}

// Task 5: Traffic Signal System
var signalColor = prompt("Enter the traffic signal color (Red, Yellow, Green):").toLowerCase();
switch (signalColor) {
    case "red":
        console.log("Stop!");
        break;
    case "yellow":
        console.log("Ready!");
        break;
    case "green":
        console.log("Go!");
        break;
    default:
        console.log("Invalid signal color!");
}

// Task 6: Shopping Cart
var cart = [];
var product = prompt("Enter the product name:");
var quantity = parseInt(prompt("Enter the quantity:"));
var price = parseFloat(prompt("Enter the price:"));
var total = quantity * price;
cart.push({ product: product, quantity: quantity, price: price, total: total });
console.log("Shopping Cart:");
cart.forEach(item => {
    console.log("Product: " + item.product + ", Quantity: " + item.quantity + ", Price: $" + item.price + ", Total: $" + item.total);
});

// Task 7: ATM Transaction
var balance = 1000;
var amount = parseFloat(prompt("Enter the amount:"));
if (amount > balance) {
    console.log("Insufficient balance!");
} else {
    balance -= amount;
    console.log("Transaction successful! New balance: $" + balance);
}

// Task 8: Online Shopping Cart
var cart = [];
var product = prompt("Enter the product name:");
var quantity = parseInt(prompt("Enter the quantity:"));
var price = parseFloat(prompt("Enter the price:"));
var total = quantity * price;
cart.push({ product: product, quantity: quantity, price: price, total: total });
console.log("Shopping Cart:");
cart.forEach(item => {
    console.log("Product: " + item.product + ", Quantity: " + item.quantity + ", Price: $" + item.price + ", Total: $" + item.total);
});

// Task 9: Employee Payroll System
var employees = [];
var employee = {};
employee.name = prompt("Enter the employee name:");
employee.salary = parseFloat(prompt("Enter the salary:"));
employees.push(employee);
console.log("Employee Payroll:");
employees.forEach(emp => {
    console.log("Name: " + emp.name + ", Salary: $" + emp.salary);
});

// Task 10: Online Shopping Cart
var cart = [];
var product = prompt("Enter the product name:");
var quantity = parseInt(prompt("Enter the quantity:"));
var price = parseFloat(prompt("Enter the price:"));
var total = quantity * price;
cart.push({ product: product, quantity: quantity, price: price, total: total });
console.log("Shopping Cart:");
cart.forEach(item => {
    console.log("Product: " + item.product + ", Quantity: " + item.quantity + ", Price: $" + item.price + ", Total: $" + item.total);
});

// Task 11: Online Shopping Cart
var cart = [];
var product = prompt("Enter the product name:");
var quantity = parseInt(prompt("Enter the quantity:"));
var price = parseFloat(prompt("Enter the price:"));
var total = quantity * price;
cart.push({ product: product, quantity: quantity, price: price, total: total });
console.log("Shopping Cart:");
cart.forEach(item => {
    console.log("Product: " + item.product + ", Quantity: " + item.quantity + ", Price: $" + item.price + ", Total: $" + item.total);
});

// Task 12: Online Shopping Cart
var cart = [];
var product = prompt("Enter the product name:");
var quantity = parseInt(prompt("Enter the quantity:"));
var price = parseFloat(prompt("Enter the price:"));
var total = quantity * price;
cart.push({ product: product, quantity: quantity, price: price, total: total });
console.log("Shopping Cart:");
cart.forEach(item => {
    console.log("Product: " + item.product + ", Quantity: " + item.quantity + ", Price: $" + item.price + ", Total: $" + item.total);
});

// Task 13: Online Shopping Cart
var cart = [];
var product = prompt("Enter the product name:");
var quantity = parseInt(prompt("Enter the quantity:"));
var price = parseFloat(prompt("Enter the price:"));
var total = quantity * price;
cart.push({ product: product, quantity: quantity, price: price, total: total });
console.log("Shopping Cart:");
cart.forEach(item => {
    console.log("Product: " + item.product + ", Quantity: " + item.quantity + ", Price: $" + item.price + ", Total: $" + item.total);
});

// Task 14: Online Shopping Cart
var cart = [];
var product = prompt("Enter the product name:");
var quantity = parseInt(prompt("Enter the quantity:"));
var price = parseFloat(prompt("Enter the price:"));
var total = quantity * price;
cart.push({ product: product, quantity: quantity, price: price, total: total });
console.log("Shopping Cart:");
cart.forEach(item => {
    console.log("Product: " + item.product + ", Quantity: " + item.quantity + ", Price: $" + item.price + ", Total: $" + item.total);
});

// Task 15: Online Shopping Cart
var cart = [];
var product = prompt("Enter the product name:");
var quantity = parseInt(prompt("Enter the quantity:"));
var price = parseFloat(prompt("Enter the price:"));
var total = quantity * price;
cart.push({ product: product, quantity: quantity, price: price, total: total });
console.log("Shopping Cart:");
cart.forEach(item => {
    console.log("Product: " + item.product + ", Quantity: " + item.quantity + ", Price: $" + item.price + ", Total: $" + item.total);
});
