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

// Display results
document.getElementById("numberConversionOutput").innerHTML = conversionOutput;


// ==========================
// Part 3: Math & Formatting
// ==========================

// TODO:
// 1. Create at least 2-3 numeric variables
//
// 2. Perform calculations:
//    - at least one addition
//    - at least one other operation (subtract, multiply, or divide)
//
// 3. Use at least ONE of the following:
//    - toFixed()
//    - toLocaleString()
//    - Number.parseInt()
//    - Number.parseFloat()
//
// 4. Build a string showing your results
//
// 5. Display the results inside the element with id="mathOutput"

// ==========================
// Part 4: Conditionals
// ==========================

// TODO:
// 1. Write at least TWO if/else statements
//
// Ideas:
// - check if a value is NaN
// - check if a number is an integer
// - check if a result is greater than a certain value
//
// 2. Display a message on the page based on the condition
//    (append it to an existing section or create a new message)