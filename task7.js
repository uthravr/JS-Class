//Task 1: Traffic Signal Management
var signalColor = prompt("Enter the traffic signal color (red, yellow, green):").toLowerCase();
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
// Task 2: Employee Attendance Report
for (var i = 1; i <= 30; i++) {
    console.log("Employee " + i + " Present");
}
// Task 3: ATM Cash Withdrawal
var balance = 10000;
while (balance > 0) {
    balance -= 500;
    console.log("Remaining balance: ₹" + balance);
}
// Task 4: College Admission Eligibility
var age = parseInt(prompt("Enter your age:"));
var percentage = parseFloat(prompt("Enter your percentage:"));
var entranceExamPassed = prompt("Did you pass the entrance exam? (yes/no)").toLowerCase();
if (age >= 18) {
    if (percentage >= 70) {
        if (entranceExamPassed === "yes") {
            console.log("You are eligible for admission.");
        }
        else {
            console.log("You are not eligible for admission due to failed entrance exam.");
        }
    }
    else {
        console.log("You are not eligible for admission due to low percentage.");
    }
}
else {
    console.log("You are not eligible for admission due to age.");
}
// Task 5: Online Shopping Cart
var cart = [];
while (true) {
    var product = prompt("Enter the product name (or 'quit' to exit):");
    if (product === "quit") {
        break;
    }
    cart.push(product);
    console.log(product + " added to cart.");
}
console.log("Your shopping cart contains: " + cart.join(", "));
// Task 6: Salary Processing System
function calculateSalary(baseSalary) {
    var tax = 0.1 * baseSalary;
    var bonus = 0.05 * baseSalary;
    return baseSalary - tax + bonus;
}
var baseSalary = parseFloat(prompt("Enter your base salary:"));
var finalSalary = calculateSalary(baseSalary);
console.log("Final Salary: ₹" + finalSalary);
// Task 7: E-commerce Discount Engine
function applyDiscount(price, discount, callback) {
    var discountedPrice = price - (price * discount / 100);
    callback(discountedPrice);
}
var productPrice = parseFloat(prompt("Enter the product price:"));
var discountPercentage = parseFloat(prompt("Enter the discount percentage:"));
applyDiscount(productPrice, discountPercentage, function (discountedPrice) {
    console.log("Discounted Price: ₹" + discountedPrice);
});
// Task 8: Promotional Offers
function* offerGenerator() {
    yield "10% OFF";
    yield "20% OFF";
    yield "30% OFF";
}
var offers = offerGenerator();
console.log("Available Offers:");
for (var offer of offers) {
    console.log("- " + offer);
}
// Task 9: Movie Ticket Booking System
function getMovieLanguage(movieName) {
    switch (movieName) {
        case "Inception":
            return "English";
        case "3 Idiots":
            return "Hindi";
        case "Parasite":
            return "Korean";
        default:
            return "Unknown";
    }
}
var movieName = prompt("Enter the movie name:");
var movieLanguage = getMovieLanguage(movieName);
console.log("Movie Name: " + movieName + ", Language: " + movieLanguage);
// Task 10: Online Shopping Cart
function addToCart(product) {
    cart.push(product);
    console.log(product + " added to cart.");
}
var cart = [];
addToCart("Shoes");
addToCart("T-Shirt");
addToCart("Jeans");
console.log("Your shopping cart contains: " + cart.join(", "));
// Task 11: Employee Payroll System
function generatePayrollReport(employees) {
    return employees.map(function (employee) {
        return {
            name: employee.name,
            salary: employee.salary,
            tax: 0.1 * employee.salary,
            netSalary: 0.9 * employee.salary
        };
    });
}
var employees = [
    { name: "Alice", salary: 50000 },
    { name: "Bob", salary: 60000 },
    { name: "Charlie", salary: 70000 }];
var payrollReport = generatePayrollReport(employees);
console.log("Payroll Report:");
payrollReport.forEach(function (employee) {
    console.log("Name: " + employee.name + ", Salary: $" + employee.salary + ", Tax: $" + employee.tax + ", Net Salary: $" + employee.netSalary);
});
// Task 12: E-commerce Product Filter
var products = [
    { name: "Laptop", price: 8000, category: "Electronics" },
    { name: "T-Shirt", price: 500, category: "Clothing" },
    { name: "Headphones", price: 1000, category: "Electronics" },
    { name: "Jeans", price: 1500, category: "Clothing" }];
function filterProductsByCategory(category) {
    return products.filter(function (product) {
        return product.category === category;
    });
}
var filteredProducts = filterProductsByCategory("Electronics");
console.log("Products in Electronics Category:");
filteredProducts.forEach(function (product) {
    console.log("Name: " + product.name + ", Price: $" + product.price);
});
// Task 13: Find First Premium Customer
var customers = [
    { name: "Alice", purchaseAmount: 30000 },
    { name: "Bob", purchaseAmount: 60000 },
    { name: "Charlie", purchaseAmount: 45000 }];
function findFirstPremiumCustomer(customers) {
    return customers.find(function (customer) {
        return customer.purchaseAmount > 50000;
    });
}
var firstPremiumCustomer = findFirstPremiumCustomer(customers);
if (firstPremiumCustomer) {
    console.log("First Premium Customer: " + firstPremiumCustomer.name);
}
else {
    console.log("No premium customers found.");
}
// Task 14: Company Expense Tracker
var expenses = [1000, 2000, 1500, 3000, 2500];
function calculateTotalExpenses(expenses) {
    return expenses.reduce(function (total, expense) {
        return total + expense;
    }, 0);
}
var totalExpenses = calculateTotalExpenses(expenses);
console.log("Total Expenses: $" + totalExpenses);
// Task 15: Gaming Tournament Verification
var players = [
    { name: "Alice", age: 20 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 22 }];
function areAllPlayersAbove18(players) {
    return players.every(function (player) {
        return player.age > 18;
    });
}
var allPlayersAbove18 = areAllPlayersAbove18(players);
if (allPlayersAbove18) {
    console.log("All players are above 18.");
}
else {
    console.log("Not all players are above 18.");
}
// Task 16: Job Portal Search
var candidates = [
    { name: "Alice", skills: ["JavaScript", "React"] },
    { name: "Bob", skills: ["Python", "Django"] },
    { name: "Charlie", skills: ["JavaScript", "Angular"] }];
function isAnyCandidateKnowsReact(candidates) {
    return candidates.some(function (candidate) {
        return candidate.skills.includes("React");
    });
}
var anyCandidateKnowsReact = isAnyCandidateKnowsReact(candidates);
if (anyCandidateKnowsReact) {
    console.log("At least one candidate knows React.");
}
else {
    console.log("No candidate knows React.");
}
// Task 17: Mobile Number Validator
function validateMobileNumber(mobileNumber) {
    if (mobileNumber.length === 10 && ["6", "7", "8", "9"].includes(mobileNumber[0])) {
        return true;
    }
    return false;
}
var mobileNumber = "9876543210";
if (validateMobileNumber(mobileNumber)) {
    console.log("Valid mobile number.");
}
else {
    console.log("Invalid mobile number.");
}
// Task 18: URL Slug Generator
function generateSlug(title) {
    return title.toLowerCase().split(" ").join("-");
}
var title = "Hello World";
var slug = generateSlug(title);
console.log("Slug: " + slug);
// Task 19: Employee Sorting Dashboard
var employees = [
    { name: "Alice", salary: 50000 },
    { name: "Bob", salary: 60000 },
    { name: "Charlie", salary: 45000 }];
function sortEmployeesBySalary(employees) {
    return employees.sort(function (a, b) {
        return b.salary - a.salary;
    });
}
var sortedEmployees = sortEmployeesBySalary(employees);
console.log("Employees sorted by salary:");
sortedEmployees.forEach(function (employee) {
    console.log("Name: " + employee.name + ", Salary: $" + employee.salary);
});
// Task 20: Movie Booking System
var movies = ["Inception", "3 Idiots", "Parasite"];
function displayAvailableMovies(movies) {
    console.log("Available Movies:");
    movies.forEach(function (movie) {
        console.log("- " + movie);
    });
}
displayAvailableMovies(movies);
function generateBookingIDs(movies) {
    return movies.map(function (movie) {
        return "Booking ID for " + movie + ": " + Math.floor(Math.random() * 1000);
    });
}
var bookingIDs = generateBookingIDs(movies);
console.log("Booking IDs:");
bookingIDs.forEach(function (bookingID) {
    console.log(bookingID);
});
