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

// Get page elements
const scoreInput = document.getElementById("scoreInput");
const addButton = document.getElementById("addScoreBtn");
const clearButton = document.getElementById("clearScoresBtn");
const assignmentList = document.getElementById("assignmentList");
const mathOutput = document.getElementById("mathOutput");


// When the button is clicked
addButton.addEventListener("click", function () {

// Get value from input and convert to number
const enteredValue = scoreInput.value;
const score = Number(enteredValue);

// Validate input
if (Number.isNaN(score)) {
mathOutput.innerHTML = "Please enter a valid number.";
return;
}

// Add score to the list
scores.push(score);

// Clear input box
scoreInput.value = "";

// Update assignment list display
assignmentList.innerHTML = scores.join(", ");

// ======================
// Calculate Total
// ======================

let total = 0;

for (let i = 0; i < scores.length; i++) {
total += scores[i];
}

// Calculate average
const average = total / scores.length;

// Format average
const formattedAverage = average.toFixed(2);


// ======================
// Letter Grade
// ======================

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


// ======================
// Pass / Fail (Ternary)
// ======================

const passFail = average >= 70 ? "PASS" : "FAIL";


// Display results
mathOutput.innerHTML =
"Total Assignments: " + scores.length + "<br>" +
"Average Score: " + formattedAverage + "<br>" +
"Letter Grade: " + letterGrade + "<br>" +
"Result: " + passFail;

});

// ==========================
// Clear All Scores Button
// ==========================

clearButton.addEventListener("click", function () {

  // Empty the scores array
  scores = [];

  // Reset display text
  assignmentList.innerHTML = "No assignments added yet.";
  mathOutput.innerHTML = "Results will appear here";

  // Clear the input box
  scoreInput.value = "";

});