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
//$("#main").append(skills[0]);

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

// function nameChanger(oldName) {
//   var finalName = oldName;
//   // Your code goes here!
//   var personName = finalName.split(' ');
//   var firstName = personName[0];
//   var lastName = personName[1].toUpperCase();
//   var fNameCapitalized = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();

//   finalName = fNameCapitalized +' '+  lastName ;
//   // Don't delete this line!
//   return finalName;
// }

function nameChanger(oldName) {
    var finalName = oldName;
    var names = finalName.split(" ");
    names[1] = names[1].toUpperCase();
    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
    finalName = names.join(" ");
    return finalName;
}

// Did your code work? The line below will tell you!
console.log(nameChanger(name));



var contact = ["+6395201258","cjpesco@gmail.com"];
var bio = {
    "name":"CJ Pesco",
    "role":"Web Developer",
    "contacts": {
        "mobile":"+63912581024",
        "email": "cjpesco@gmail.com",
        "github":"cjpesco",
        "twitter":"@cjpesco",
        "location":"Southern Leyte"
    },
    "biopic": "images/fry.jpg",
    "welcomeMessage":"Welcome to my website",
    "age":25,
    "skills": skills
};

bio["city"] = "Maasin City";
bio["favColor"] = "Blue";

var work = {};
var education = {};
work.jobposition = "Back End Developer";
work.employer = "Clarkline Studio";
work.yearsInCompany = 12;
work.location = "Maasin City";

education["college"] = "STI College Ormoc";
education["years"] = "2015 - 2016";
education["city"] = "Ormoc City";

$("#main").append(bio.name);
$("#main").append(bio.role);
$("#main").append(bio.contacts);
$("#main").append(bio.city);
$("#main").append(bio.biopic);
$("#main").append(bio.welcomeMessage);
$("#main").append(bio.age);
$("#main").append(bio.skills);
$("#main").append(bio.favColor);

$("#main").append(work.jobposition);
$("#main").append(work.employer);
$("#main").append(work.yearsInCompany);
$("#main").append(work.location);

$("#main").append(education.college);
$("#main").append(education.years);
$("#main").append(education.schoolLocation);




