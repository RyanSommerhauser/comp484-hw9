// ==========================
// Part 1: Date Display
// ==========================

// Create a Date object for the current date
const currentDate = new Date();

// Extract month, day, and year
let month = currentDate.getMonth() + 1; // months are 0-based
let day = currentDate.getDate();
let year = currentDate.getFullYear();

// Add leading zeros if needed
if (month < 10) {
  month = "0" + month;
}

if (day < 10) {
  day = "0" + day;
}

// Create the formatted date string
const formattedDate = "Today is " + month + "/" + day + "/" + year;

// Display it on the webpage
document.getElementById("dateOutput").textContent = formattedDate;
// ==========================
// Part 2: Number Conversion
// ==========================

// Create starting values
const valueOne = "67";          // numeric string
const valueTwo = "124";         // numeric string
const valueThree = "example";   // non-numeric string
const valueFour = "59.48";      // decimal string


// Convert values using Number()
const convertedOne = Number(valueOne);
const convertedTwo = Number(valueTwo);
const convertedThree = Number(valueThree);
const convertedFour = Number(valueFour);


// Check NaN status
const isNaNOne = Number.isNaN(convertedOne);
const isNaNTwo = Number.isNaN(convertedTwo);
const isNaNThree = Number.isNaN(convertedThree);
const isNaNFour = Number.isNaN(convertedFour);


// Check integer status
const isIntegerOne = Number.isInteger(convertedOne);
const isIntegerTwo = Number.isInteger(convertedTwo);
const isIntegerThree = Number.isInteger(convertedThree);
const isIntegerFour = Number.isInteger(convertedFour);


// Build output sentences
let conversionOutput = "";

conversionOutput +=
  "Original: '" + valueOne + "' → Converted: " + convertedOne +
  " → isNaN: " + isNaNOne +
  " → isInteger: " + isIntegerOne + "<br>";

conversionOutput +=
  "Original: '" + valueTwo + "' → Converted: " + convertedTwo +
  " → isNaN: " + isNaNTwo +
  " → isInteger: " + isIntegerTwo + "<br>";

conversionOutput +=
  "Original: '" + valueThree + "' → Converted: " + convertedThree +
  " → isNaN: " + isNaNThree +
  " → isInteger: " + isIntegerThree + "<br>";

conversionOutput +=
  "Original: '" + valueFour + "' → Converted: " + convertedFour +
  " → isNaN: " + isNaNFour +
  " → isInteger: " + isIntegerFour + "<br>";

// ==========================
// Part 4: Conditionals
// ==========================

// Conditional example 1
let messageOne = "";

if (Number.isNaN(convertedThree)) {
  messageOne = "<p>The value '" + valueThree + "' could not be converted into a number.</p>";
} else {
  messageOne = "<p>The value '" + valueThree + "' was successfully converted.</p>";
}


// Conditional example 2
let messageTwo = "";

if (convertedFour > 60) {
  messageTwo = "<p>The converted decimal value '" + valueFour + "' is greater than 60.</p>";
} else {
  messageTwo = "<p>The converted decimal value '" + valueFour + "' is 60 or less.</p>";
}


// Combine all conversion results
conversionOutput += messageOne;
conversionOutput += messageTwo;


// Display results
document.getElementById("numberConversionOutput").innerHTML = conversionOutput;


// ==========================
// Part 3: Math & Formatting
// ==========================

// Store assignment scores
let scores = [];

// Default Scores
scores.push(100);
scores.push(50);
scores.push(85);

// Get page elements
const scoreInput = document.getElementById("scoreInput");
const addButton = document.getElementById("addScoreBtn");
const clearButton = document.getElementById("clearScoresBtn");
const assignmentList = document.getElementById("assignmentList");
const mathOutput = document.getElementById("mathOutput");

// Function to update the display based on current scores
function updateScoresDisplay() {
  if (scores.length === 0) {
    assignmentList.innerHTML = "No assignments added yet.";
    mathOutput.innerHTML = "Results will appear here";
    return;
  }

  // Update assignment list display
  assignmentList.innerHTML = scores.join(", ");

  // Calculate total
  let total = 0;
  for (let i = 0; i < scores.length; i++) {
    total += scores[i];
  }

  // Calculate average
  const average = total / scores.length;
  const formattedAverage = average.toFixed(2);

  // Determine letter grade
  let letterGrade;
  if (average >= 90) {
    letterGrade = "A";
  } else if (average >= 80) {
    letterGrade = "B";
  } else if (average >= 70) {
    letterGrade = "C";
  } else if (average >= 60) {
    letterGrade = "D";
  } else {
    letterGrade = "F";
  }

  // Pass/Fail using ternary
  const passFail = average >= 70 ? "PASS" : "FAIL";

  // Display results
  mathOutput.innerHTML =
    "Total Assignments: " + scores.length + "<br>" +
    "Average Score: " + formattedAverage + "<br>" +
    "Letter Grade: " + letterGrade + "<br>" +
    "Result: " + passFail;
}

// ==========================
// Add Assignment Button
// ==========================
addButton.addEventListener("click", function () {
  const enteredValue = scoreInput.value;
  const score = Number(enteredValue);

  // Validate input
  if (Number.isNaN(score)) {
    mathOutput.innerHTML = "Please enter a valid number.";
    return;
  }

  // Add score to array
  scores.push(score);

  // Clear input
  scoreInput.value = "";

  // Update display
  updateScoresDisplay();
});

// ==========================
// Clear All Scores Button
// ==========================
clearButton.addEventListener("click", function () {
  scores = [];
  scoreInput.value = "";
  updateScoresDisplay();
});

// ==========================
// Initialize page with default scores
// ==========================
updateScoresDisplay();