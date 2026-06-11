// Task 1: Student Management System
function printStudentDetails(student) {
    console.log("ID: " + student.id);
    console.log("Name: " + student.name);
    console.log("Department: " + student.department);
    console.log("Mark: " + student.mark);
    var grade;
    if (student.mark >= 90) {
        grade = "A";
    } else if (student.mark >= 75) {
        grade = "B";
    } else if (student.mark >= 50) {
        grade = "C";
    } else {
        grade = "Fail";
    }
    console.log("Grade: " + grade);
}
var students = [
    { id: 1, name: "Alice", department: "Computer Science", mark: 85 },
    { id: 2, name: "Bob", department: "Mathematics", mark: 78 },
    { id: 3, name: "Charlie", department: "Physics", mark: 92 },
    { id: 4, name: "David", department: "Chemistry", mark: 68 }];
// Display all student names
console.log("Student Names:");
function displayStudentNames(students) {
    students.forEach(function (student) {
        console.log(student.name);
    });}
displayStudentNames(students);
// Calculate total marks
function calculateTotalMarks(students) {
    var total = 0;
    for (var i = 0; i < students.length; i++) {
        total += students[i].mark;
    }
    return total;
}
var totalMarks = calculateTotalMarks(students);
console.log("Total Marks: " + totalMarks);
// Find students who scored above 80
function findHighScorers(students) {
    var highScorers = [];
    for (var i = 0; i < students.length; i++) {
        if (students[i].mark > 80) {
            highScorers.push(students[i]);
        }
    }
    return highScorers;
}
var highScorers = findHighScorers(students);
console.log("Students who scored above 80:");
highScorers.forEach(function (student) {
    printStudentDetails(student);
});

// Task 2: Employee Payroll System
var employees = [
    { id: 1, name: "John", salary: 25000, department: "HR" },
    { id: 2, name: "Jane", salary: 32000, department: "Finance" },
    { id: 3, name: "Bob", salary: 45000, department: "IT" }];
// Print all employee names
console.log("Employee Names:");
function printEmployeeNames(employees) {
    employees.forEach(function (employee) {
        console.log(employee.name);
    });
}
printEmployeeNames(employees);
// Calculate total company salary expense
function calculateTotalSalary(employees) {
    var total = 0;
    for (var i = 0; i < employees.length; i++) {
        total += employees[i].salary;
    }
    return total;
}
var totalSalary = calculateTotalSalary(employees);
console.log("Total Company Salary Expense: $" + totalSalary);
// Display employees earning above ₹30,000
console.log("Employees earning above ₹30,000:");
employees.forEach(function (employee) {
    if (employee.salary > 30000) {
        printEmployeeDetails(employee);
    }
});
// Use switch statement for department descriptions
function getDepartmentDescription(department) {
    switch (department) {
        case "HR":
            return "Human Resources";
        case "Finance":
            return "Financial Services";
        case "IT":
            return "Information Technology";
        default:
            return "Unknown";
    }
}
// Create a callback function to generate payroll reports
function generatePayrollReport(employees) {
    console.log("Payroll Report:");
    employees.forEach(function (employee) {
        var departmentDescription = getDepartmentDescription(employee.department);
        console.log("Name: " + employee.name + ", Salary: $" + employee.salary + ", Department: " + departmentDescription);
    });
}
generatePayrollReport(employees);

// Task 3: Online Food Order System
var foodItems = [
    { id: 1, foodName: "Pizza", price: 250, category: "Fast Food" },
    { id: 2, foodName: "Burger", price: 150, category: "Fast Food" },
    { id: 3, foodName: "Pasta", price: 200, category: "Main Course" }];
// Display all food names
console.log("Food Names:");
function displayFoodNames(foodItems) {
    foodItems.forEach(function (foodItem) {
        console.log(foodItem.foodName);
    });
}
displayFoodNames(foodItems);
// Calculate total menu value
function calculateTotalMenuValue(foodItems) {
    var total = 0;
    for (var i = 0; i < foodItems.length; i++) {
        total += foodItems[i].price;
    }
    return total;
}
var totalMenuValue = calculateTotalMenuValue(foodItems);
console.log("Total Menu Value: $" + totalMenuValue);
// Show foods above ₹200
console.log("Foods above ₹200:");
foodItems.forEach(function (foodItem) {
    if (foodItem.price > 200) {
        console.log(foodItem.foodName);
    }
});
// Use switch statement for category descriptions
function getCategoryDescription(category) {
    switch (category) {
        case "Fast Food":
            return "Fast Food";
        case "Main Course":
            return "Main Course";
        default:
            return "Unknown";
    }
}
// Create an order confirmation callback function
function generateOrderConfirmation(foodItems) {
    console.log("Order Confirmation:");
    foodItems.forEach(function (foodItem) {
        var categoryDescription = getCategoryDescription(foodItem.category);
        console.log("Food Name: " + foodItem.foodName + ", Price: $" + foodItem.price + ", Category: " + categoryDescription);
    });
}
generateOrderConfirmation(foodItems);

// Task 4: Movie Ticket Booking System
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
var movies = [
    { movieName: "Inception", ticketPrice: 300, availableSeats: 50 },
    { movieName: "3 Idiots", ticketPrice: 250, availableSeats: 30 },
    { movieName: "Parasite", ticketPrice: 350, availableSeats: 20 }];
// Display all movie names
console.log("Movie Names:");
function displayMovieNames(movies) {
    movies.forEach(function (movie) {
        console.log(movie.movieName);
    });
}
displayMovieNames(movies);
// Calculate total available seats
function calculateTotalAvailableSeats(movies) {
    var total = 0;
    for (var i = 0; i < movies.length; i++) {
        total += movies[i].availableSeats;
    }
    return total;
}
var totalAvailableSeats = calculateTotalAvailableSeats(movies);
console.log("Total Available Seats: " + totalAvailableSeats);
// Check whether booking is possible
function isBookingPossible(movies) {
    var movieName = prompt("Enter the movie name you want to book:");
    var seatsToBook = parseInt(prompt("Enter the number of seats you want to book:"));
    for (var i = 0; i < movies.length; i++) {
        if (movies[i].movieName === movieName) {
            if (movies[i].availableSeats >= seatsToBook) {
                return true;
            } else {
                return false;
            }
        }
    }
    return false;
}
if (isBookingPossible(movies)) {
    console.log("Booking is possible.");
} else {
    console.log("Booking is not possible.");
}
// Generate booking confirmation using callback
function generateBookingConfirmation(movieName, seatsBooked) {
    console.log("Booking Confirmation:");
    var movieLanguage = getMovieLanguage(movieName);
    console.log("Movie Name: " + movieName + ", Language: " + movieLanguage + ", Seats Booked: " + seatsBooked);
}
var movieName = prompt("Enter the movie name you want to book:");
var seatsBooked = parseInt(prompt("Enter the number of seats you want to book:"));
generateBookingConfirmation(movieName, seatsBooked);

// Task 5: Hospital Patient Records
var patients = [
    { patientId: 1, patientName: "Alice", age: 65, disease: "Cardiology" },
    { patientId: 2, patientName: "Bob", age: 45, disease: "Neurology" },
    { patientId: 3, patientName: "Charlie", age: 70, disease: "Orthopedics" }];
// Display all patient names
console.log("Patient Names:");
function displayPatientNames(patients) {
    patients.forEach(function (patient) {
        console.log(patient.patientName);
    });
}
displayPatientNames(patients);
// Count total patients
function countTotalPatients(patients) {
    return patients.length;
}
var totalPatients = countTotalPatients(patients);
console.log("Total Patients: " + totalPatients);
// Print patients above age 60
console.log("Patients above age 60:");
patients.forEach(function (patient) {
    if (patient.age > 60) {
        console.log(patient.patientName);
    }
});
// Use switch statement for disease departments
function getDiseaseDepartment(disease) {
    switch (disease) {
        case "Cardiology":
            return "Cardiology";
        case "Neurology":
            return "Neurology";
        case "Orthopedics":
            return "Orthopedics";
        default:
            return "Unknown";
    }
}
// Create a callback function for appointment confirmation
function generateAppointmentConfirmation(patient) {
    console.log("Appointment Confirmation:");
    var department = getDiseaseDepartment(patient.disease);
    console.log("Patient Name: " + patient.patientName + ", Age: " + patient.age + ", Disease: " + patient.disease + ", Department: " + department);
}
generateAppointmentConfirmation(patients[0]);

// Task 6: Library Management System
function getBookCategory(bookName) {
    switch (bookName) {
        case "The Great Gatsby":
            return "Fiction";
        case "A Brief History of Time":
            return "Science";
        case "The Art of War":
            return "Strategy";
        default:
            return "Unknown";
    }
}
var books = [
    { bookId: 1, bookName: "The Great Gatsby", author: "F. Scott Fitzgerald", price: 300 },
    { bookId: 2, bookName: "A Brief History of Time", author: "Stephen Hawking", price: 450 },
    { bookId: 3, bookName: "The Art of War", author: "Sun Tzu", price: 600 }];
// Display all book names
console.log("Book Names:");
for (var i = 0; i < books.length; i++) {
    console.log(books[i].bookName);
}
// Calculate total book value
var totalBookValue = 0;
for (var i = 0; i < books.length; i++) {
    totalBookValue += books[i].price;
}
console.log("Total Book Value: $" + totalBookValue);
// Display books above ₹500
console.log("Books above ₹500:");
for (var i = 0; i < books.length; i++) {
    if (books[i].price > 500) {
        console.log(books[i].bookName);
    }
}
// Use switch statement for book categories
function getBookCategory(bookName) {
    switch (bookName) {
        case "The Great Gatsby":
            return "Fiction";
        case "A Brief History of Time":
            return "Science";
        case "The Art of War":
            return "Strategy";
        default:
            return "Unknown";
    }
}
// Create a function to issue a book.
function issueBook(bookName) {
    console.log("Book Issued:");
    var category = getBookCategory(bookName);
    console.log("Book Name: " + bookName + ", Category: " + category);
}
issueBook("The Great Gatsby");

// Task 7: E-Commerce Product Dashboard
// Create an array of products.
var products = [
    { productId: 1, productName: "Laptop", price: 50000, stock: 5 },
    { productId: 2, productName: "Smartphone", price: 20000, stock: 15 },
    { productId: 3, productName: "Tablet", price: 15000, stock: 8 }
];
// Display all products.
console.log("Products:");
products.forEach(function (product) {
    console.log("Product Name: " + product.productName + ", Price: $" + product.price + ", Stock: " + product.stock);
});
// Calculate inventory value.
var inventoryValue = 0;
products.forEach(function (product) {
    inventoryValue += product.price * product.stock;
});
console.log("Inventory Value: $" + inventoryValue);
// Find products with stock less than 10.
console.log("Products with stock less than 10:");
products.forEach(function (product) {
    if (product.stock < 10) {
        console.log("Product Name: " + product.productName + ", Stock: " + product.stock);
    }
});
// Display stock status.
console.log("Stock Status:");
products.forEach(function (product) {
    if (product.stock === 0) {
        console.log("Product Name: " + product.productName + ", Status: Out of Stock");
    } else if (product.stock < 10) {
        console.log("Product Name: " + product.productName + ", Status: Low Stock");
    } else {
        console.log("Product Name: " + product.productName + ", Status: In Stock");
    }
});
// Generate product report using callback function.
function generateProductReport(products) {
    console.log("Product Report:");
    products.forEach(function (product) {
        console.log("Product Name: " + product.productName + ", Price: $" + product.price + ", Stock: " + product.stock);
    });
}
generateProductReport(products);


// Task 8: College Admission System
var applicants = [
    { name: "Alice", age: 19, percentage: 85, department: "Computer Science" },
    { name: "Bob", age: 17, percentage: 78, department: "Mathematics" },
    { name: "Charlie", age: 20, percentage: 92, department: "Physics" }];
// Display applicant names.
console.log("Applicant Names:");
for (var i = 0; i < applicants.length; i++) {
    console.log(applicants[i].name);
}
// Check eligibility and count eligible students.
var eligibleStudents = 0;
for (var i = 0; i < applicants.length; i++) {
    if (applicants[i].age >= 18 && applicants[i].percentage >= 60) {
        eligibleStudents++;
    }
}
console.log("Number of Eligible Students: " + eligibleStudents);
// Use switch statement for department names.
function getDepartmentDescription(department) {
    switch (department) {
        case "Computer Science":
            return "Computer Science Department";
        case "Mathematics":
            return "Mathematics Department";
        case "Physics":
            return "Physics Department";
        default:
            return "Unknown Department";
    }
}
// Generate admission result using callback.
function generateAdmissionResult(applicants) {
    console.log("Admission Result:");
    for (var i = 0; i < applicants.length; i++) {
        var departmentDescription = getDepartmentDescription(applicants[i].department);
        console.log("Name: " + applicants[i].name + ", Age: " + applicants[i].age + ", Percentage: " + applicants[i].percentage + ", Department: " + departmentDescription);
    }
}
generateAdmissionResult(applicants);

// Task 9: Bus Reservation System
var passengers = [
    { passengerId: 1, name: "Alice", seatNumber: 5, ticketPrice: 500 },
    { passengerId: 2, name: "Bob", seatNumber: 10, ticketPrice: 300 },
    { passengerId: 3, name: "Charlie", seatNumber: 15, ticketPrice: 400 }];
// Display passenger names.
console.log("Passenger Names:");
for (var i = 0; i < passengers.length; i++) {
    console.log(passengers[i].name);
}
// Calculate total collection.
var totalCollection = 0;
for (var i = 0; i < passengers.length; i++) {
    totalCollection += passengers[i].ticketPrice;
}
console.log("Total Collection: $" + totalCollection);
// Check occupied seats.
var occupiedSeats = 0;
for (var i = 0; i < passengers.length; i++) {
    if (passengers[i].seatNumber !== null) {
        occupiedSeats++;
    }
}
console.log("Occupied Seats: " + occupiedSeats);
// Use switch statement for bus types.
function getBusType(busType) {
    switch (busType) {
        case "AC":
            return "AC Bus";
        case "Non-AC":
            return "Non-AC Bus";
        default:
            return "Unknown Bus Type";
    }
}
// Generate ticket confirmation using callback.
function generateTicketConfirmation(passengers) {
    console.log("Ticket Confirmation:");
    for (var i = 0; i < passengers.length; i++) {
        var busType = getBusType(passengers[i].busType);
        console.log("Passenger Name: " + passengers[i].name + ", Seat Number: " + passengers[i].seatNumber + ", Bus Type: " + busType);
    }
}
generateTicketConfirmation(passengers);

// Task 10: Mobile Store Management
// Create an array of mobiles.
var mobiles = [
    { brand: "Samsung", model: "Galaxy S21", price: 70000, stock: 10 },
    { brand: "Apple", model: "iPhone 13", price: 80000, stock: 5 },
    { brand: "Google", model: "Pixel 6", price: 60000, stock: 8 }
];
// Display all mobile names.
console.log("Mobile Names:");
for (var i = 0; i < mobiles.length; i++) {
    console.log(mobiles[i].model);
}
// Calculate total stock value.
var totalStockValue = 0;
for (var i = 0; i < mobiles.length; i++) {
    totalStockValue += mobiles[i].price * mobiles[i].stock;
}
console.log("Total Stock Value: ₹" + totalStockValue);
// Show mobiles above ₹20,000.
console.log("Mobiles above ₹20,000:");
for (var i = 0; i < mobiles.length; i++) {
    if (mobiles[i].price > 20000) {
        console.log(mobiles[i].model);
    }
}
// Use switch statement for brand category.
function getBrandCategory(brand) {
    switch (brand) {
        case "Samsung":
            return "Android";
        case "Apple":
            return "iOS";
        case "Google":
            return "Android";
        default:
            return "Unknown";
    }
}
// Generate sales report using callback function.
function generateSalesReport(mobiles) {
    console.log("Sales Report:");
    for (var i = 0; i < mobiles.length; i++) {
        var brandCategory = getBrandCategory(mobiles[i].brand);
        console.log("Model: " + mobiles[i].model + ", Price: ₹" + mobiles[i].price + ", Stock: " + mobiles[i].stock + ", Brand Category: " + brandCategory);
    }
}
generateSalesReport(mobiles);
