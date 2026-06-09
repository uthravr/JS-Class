//Task 1: Age Category Finder
var age = parseInt(prompt("Enter your age:"));
if (age < 13) {
    console.log("You are a child.");
} else if (age >= 13 && age <= 19) {
    console.log("You are a teenager.");
} else if (age >= 20 && age <= 59) {
    console.log("You are an adult.");
}else {
    console.log("You are a senior citizen.");
}

// Task 2: Salary Hike Calculator
var salary = parseFloat(prompt("Enter your salary:"));
var hike = 0;
if (salary < 20000) {
    hike = salary * 0.2; // 20% hike
} else if (salary >= 20000 && salary <= 50000) {
    hike = salary * 0.1; // 10% hike
} else {
    hike = salary * 0.05; // 5% hike
}
console.log("Old Salary: $" + salary);
console.log("Hike: $" + hike);
console.log("New Salary: $" + (salary + hike));

// Task 3: Electricity Department
var units = parseFloat(prompt("Enter the number of units consumed:"));
var bill = 0;
if (units <= 100) {
    bill = units * 5;
} else if (units <= 200) {
    bill = 100 * 5 + (units - 100) * 7;
} else {
    bill = 100 * 5 + 100 * 7 + (units - 200) * 10;
}
console.log("Electricity Bill: $" + bill);

// Task 4: Simple ATM
var balance = 10000;
var withdrawalAmount = parseFloat(prompt("Enter the withdrawal amount:"));
if (withdrawalAmount <= balance) {
    balance -= withdrawalAmount;
    console.log("Withdrawal successful. Remaining balance: $" + balance);
} else {
    console.log("Insufficient funds. Your current balance is: $" + balance);
}

//Task 5: Login Validation
var username = prompt("Enter your username:");
var password = prompt("Enter your password:");
if (username === "admin" && password === "12345") {
    console.log("Login successful!");
} else {
    console.log("Invalid username or password.");
}

// Task 6: Mobile Recharge Offer
var rechargeAmount = parseFloat(prompt("Enter the recharge amount:"));
if (rechargeAmount >= 499) {
    console.log("Congratulations! You have received a Netflix Offer.");
} else if (rechargeAmount >= 299) {
    console.log("Congratulations! You have received 2GB Extra Data.");
} else {
    console.log("No offer available for this recharge amount.");
}

// Task 7: Traffic Signal System
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
        console.log("Invalid signal color.");
}

// Task 8: Employee Attendance
var workingDays = parseInt(prompt("Enter the total number of working days:"));
var presentDays = parseInt(prompt("Enter the number of days you were present:"));
var attendancePercentage = (presentDays / workingDays) * 100;
console.log("Attendance Percentage: " + attendancePercentage.toFixed(2) + "%");
if (attendancePercentage >= 75) {
    console.log("You are eligible for a leave.");
} else {
    console.log("You are not eligible for a leave.");
}

// Task 9: Bus Ticket Booking
var ticketPrice = 500;
var numberOfTickets = parseInt(prompt("Enter the number of tickets:"));
var totalAmount = ticketPrice * numberOfTickets;
var gst = totalAmount * 0.05;
var finalAmount = totalAmount + gst;
console.log("Total Amount: $" + totalAmount);
console.log("GST: $" + gst);
console.log("Final Amount: $" + finalAmount);

// Task 10: Restaurant Bill
var foodCost = parseFloat(prompt("Enter the food cost:"));
var discount = 0;
if (foodCost > 2000) {
    discount = foodCost * 0.1; // 10% discount
}
var finalBill = foodCost - discount;
console.log("Food Cost: $" + foodCost);
console.log("Discount: $" + discount);
console.log("Final Bill: $" + finalBill);

// Task 11: Police Recruitment
var age = parseInt(prompt("Enter your age:"));
var height = parseFloat(prompt("Enter your height in cm:"));
var weight = parseFloat(prompt("Enter your weight in kg:"));
if (age >= 18) {
    if (height >= 160) {
        if (weight >= 55) {
            console.log("You are eligible for police recruitment.");
        } else {
            console.log("You are not eligible for police recruitment due to low weight.");
        }
    } else {
        console.log("You are not eligible for police recruitment due to low height.");
    }
} else {
    console.log("You are not eligible for police recruitment due to low age.");
}

// Task 12: Student Result
var marks1 = parseFloat(prompt("Enter marks for subject 1:"));
var marks2 = parseFloat(prompt("Enter marks for subject 2:"));
var marks3 = parseFloat(prompt("Enter marks for subject 3:"));
var marks4 = parseFloat(prompt("Enter marks for subject 4:"));
var marks5 = parseFloat(prompt("Enter marks for subject 5:"));
var totalMarks = marks1 + marks2 + marks3 + marks4 + marks5;
var percentage = (totalMarks / 500) * 100;
var grade;
if (percentage >= 90) {
    grade = "A+";
} else if (percentage >= 80) {
    grade = "A";
} else if (percentage >= 70) {
    grade = "B";
} else if (percentage >= 60) {
    grade = "C";
} else {
    grade = "Fail";
}
console.log("Total Marks: " + totalMarks);
console.log("Percentage: " + percentage.toFixed(2) + "%");
console.log("Grade: " + grade);

// Task 13: Employee Shift Finder
var time = parseInt(prompt("Enter the time in 24-hour format (0-23):"));
if (time >= 6 && time < 14) {
    console.log("Morning Shift");
} else if (time >= 14 && time < 22) {
    console.log("Afternoon Shift");
} else {
    console.log("Night Shift");
}

// Task 14: Loan Eligibility
var age = parseInt(prompt("Enter your age:"));
var salary = parseFloat(prompt("Enter your salary:"));
var experience = parseInt(prompt("Enter your experience in years:"));
if (age >= 21 && salary >= 25000 && experience >= 2) {
    console.log("You are eligible for a loan.");
} else {
    console.log("You are not eligible for a loan.");
}

// Task 15: Cab Fare Calculator
var distance = parseFloat(prompt("Enter the distance traveled in KM:"));
var fare = 0;
if (distance <= 5) {
    fare = distance * 20;
} else {
    fare = 5 * 20 + (distance - 5) * 15;
}
console.log("Fare: $" + fare);

// Task 16: Multiplication Table Generator
var number = parseInt(prompt("Enter a number:"));
for (var i = 1; i <= 10; i++) {
    console.log(number + " x " + i + " = " + (number * i));
}

// Task 17: Password Checker
var passwordLength = parseInt(prompt("Enter the length of your password:"));
if (passwordLength < 6) {
    console.log("Password is weak.");
} else if (passwordLength <= 10) {
    console.log("Password is medium.");
} else {
    console.log("Password is strong.");
}

// Task 18: Company Bonus System
var experience = parseInt(prompt("Enter your years of experience:"));
var salary = parseFloat(prompt("Enter your salary:"));
var bonus = 0;
if (experience <= 2) {
    bonus = salary * 0.05; // 5% bonus
} else if (experience <= 5) {
    bonus = salary * 0.1; // 10% bonus
} else {
    bonus = salary * 0.2; // 20% bonus
}
console.log("Employee Bonus: $" + bonus);
console.log("Total Salary with Bonus: $" + (salary + bonus));

// Task 19: Countdown Timer
var count = 10;
while (count >= 1) {
    console.log(count);
    count--;
}
console.log("Happy New Year!");


// Task 20: Interview Selection System
var degree = prompt("Have you completed your degree? (yes/no):").toLowerCase();
var communication = prompt("How is your communication skill? (good/average/poor):").toLowerCase();
var technicalScore = parseFloat(prompt("Enter your technical score (0-100):"));
if (degree === "yes" && communication === "good" && technicalScore >= 70) {
    console.log("Congratulations! You have been selected for the interview.");
} else {
    if (degree !== "yes") {
        console.log("You are not eligible for the interview due to incomplete degree.");
    } else if (communication !== "good") {
        console.log("You are not eligible for the interview due to poor communication skill.");
    } else if (technicalScore < 70) {
        console.log("You are not eligible for the interview due to low technical score.");
    }
}