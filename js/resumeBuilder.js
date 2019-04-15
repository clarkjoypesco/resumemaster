/*
This is empty on purpose! Your code to build the resume will go here.
 */
// $("#main").append("Clark Joy Pesco")

// var firstName = 'Clark Joy';

// var age = 25;

// console.log('Name: ' +firstName + '\nAge: '+ age);

// var awesomeThoughts =' I am clark and I am Awesome!';
// console.log(awesomeThoughts);

// var email = 'cameron@udacity.com';

// var newEmail = email.replace('udacity','gmail');

// console.log(newEmail);

// var funThoughts = awesomeThoughts.replace('Awesome', 'Fun');

// $("#main").append(funThoughts);

var name = "CJ Pesco";
var role = "Web Developer";

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

/*
 * Programming Quiz: String Manipulation Quiz 1
 *
 * Using string methods, convert "adamify" to "Namify"
 */

var text = "adamify";

var namifyzer = function(string) {
  // Right now, the variable string === "adamify"
  // Manipulate string to make it equal to "Namify"
  // Your code goes here!
  string = string.slice(-5);
  string = "N" + string;
  return string;
};

// Did your code work? The line below will tell you!
console.log(namifyzer(text));

var skills = ["awesomeness", "programming", "teaching", "JS"];
//$("#main").append(skills);
$("#main").append(skills[0]);

var sampleArray = [0, 0, 7];

// var incrementLastArrayElement = function(_array) {
//     var newArray = [];
//     // Your code should make newArray equal to an array that has the same
//     // values as _array, but the last number has increased by one.

//     // For example:
//     // _array = [1, 2, 3];
//     // turns into:
//     // newArray = [1, 2, 4];

//     // Your code goes in here!
//     var index = 0;

//     while(index < _array.length){
//         if (index == _array.length - 1){
//             newArray[index] = _array[index] + 1;
//         } else {
//             newArray[index] = _array[index];
//         }
//         index++;
//     }

//     // Don't delete this line!
//     return newArray;
// };
function incrementLastArrayElement(_array) {
  var newArray = [];

  newArray = _array.slice(0);
  var lastNumber = newArray.pop();
  newArray.push(lastNumber + 1);
  console.log(newArray);
  return newArray;
}

// Did your code work? The line below will tell you!
console.log(incrementLastArrayElement(sampleArray));

// If given a string of a two word name formatted with any mix of capitalization, can you manipulate the string to ensure the first name has a capital first letter and the last name is totally capitalized?
var name = "AlbERt EINstEiN";

function nameChanger(oldName) {
  var finalName = oldName;
  // Your code goes here!
  var personName = finalName.split(' ');
  var firstName = personName[0];
  var lastName = personName[1].toUpperCase();
  var fNameCapitalized = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
  
  finalName = fNameCapitalized +' '+  lastName ;
  // Don't delete this line!
  return finalName;
}

// Did your code work? The line below will tell you!
console.log(nameChanger(name));
