// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We creat a new variable called "name" and assign it the string value "Dane"
// We check if the name variable is "Mary". 
// If the name variable is "Mary", we console.log "Hi, Mary!"
// If the name variable is not "Mary", we console.log "How do you do?"
// The output is "How do you do?"

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We create a variable "secret".
// We create a variable "code" and assign it the number 123.
// We check if the variable code is equal to 123.
// If code is equal to 123, we assign "secret" to string "super" and mutliply 123 (code) by 2.
// If code is not equal to 123, no change.
// The variable secret is now assigned string "super".
// The variable code is now assigned number 246.
// We check if the variable code is greater than 250.
// If code is greater than 250, we assign the variable "secret" to string "duper".
// If code is not greater than 250, no change. There is not change.
// We console.log secret. The output will be "super". 

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We create new variable "isStudent" and assign the boolean "true".
// We create new variable "age" and assign number "34".
// We create new variable "zip" and assign number "55407".
// We check if isStudent is exactly equal to true AND if zip is greater than 80000.
// If both isStudent is true AND zip is greater than 80000, we console.log "You're a student on the West Coast!".
// There is no output.
// We check if isStudent is exactly equal to false OR if age is less than 30.
// If isStudent is false OR if age is less than 30, we console.log "What are your hobbies?"
// There is no output.
// We check if isStudent is exactly equal to true.
// If isStudent is true, we console.log "Welcome to Prime!"
// There is an output "Welcome to Prime!"
// If none of the above options are true (which I think is impossible because isStudent has the 
// option of being true or false), we console.log "How about the weather?"
// There is no additional output.


//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
// FIX colorOne is set to red but should be set to blue. let colorOne = 'blue';
// colorTwo is set to blue but should be set to red. let colorTwo = 'red';
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

//FIX colorTwo should also be reassigned to 'purple'. Under colorOne = 'purple'; should be colorTwo = 'purple';
if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
//FIX time is a constant but should be avariable. let time = 4;
let temp = 40;
const time = 4;

//FIX The two conditionals have an OR between them but they should have AND.
// temp > 39 && time >= 4
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
//FIX minAge should be a variable but it is a constant.
// let minAge = 21;
let age = 21;
const minAge = 21;

//MAYBE FIX the conditional is exactly backwards to the description, so logically the 
// same as the description. I don't think this should effect the output
// but to match the descrition it should be age >= minAGE
//FIX the console.log('enter'); should be after the if statement.
if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

