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

var name = 'CJ Pesco';
var role = 'Web Developer';


var formattedName = HTMLheaderName.replace('%data%', name);
var formattedRole = HTMLheaderRole.replace('%data%', role);

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
  string = string.slice(-5)
  string = 'N' + string
  return string;
};

// Did your code work? The line below will tell you!
console.log(namifyzer(text));



var skills= ['awesomeness','programming','teaching','JS'];
//$("#main").append(skills);
$("#main").append(skills[0]);
