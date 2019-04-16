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

//var name = "CJ Pesco";
//var role = "Web Developer";

//var formattedName = HTMLheaderName.replace("%data%", name);
//var formattedRole = HTMLheaderRole.replace("%data%", role);

// $("#header").prepend(formattedRole);
// $("#header").prepend(formattedName);

// /*
//  * Programming Quiz: String Manipulation Quiz 1
//  *
//  * Using string methods, convert "adamify" to "Namify"
//  */

// var text = "adamify";

// var namifyzer = function(string) {
//   // Right now, the variable string === "adamify"
//   // Manipulate string to make it equal to "Namify"
//   // Your code goes here!
//   string = string.slice(-5);
//   string = "N" + string;
//   return string;
// };

// // Did your code work? The line below will tell you!
// console.log(namifyzer(text));

// //$("#main").append(skills);
// //$("#main").append(skills[0]);

// var sampleArray = [0, 0, 7];

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
// function incrementLastArrayElement(_array) {
//   var newArray = [];

//   newArray = _array.slice(0);
//   var lastNumber = newArray.pop();
//   newArray.push(lastNumber + 1);
//   console.log(newArray);
//   return newArray;
// }

// // Did your code work? The line below will tell you!
// console.log(incrementLastArrayElement(sampleArray));

// // If given a string of a two word name formatted with any mix of capitalization, can you manipulate the string to ensure the first name has a capital first letter and the last name is totally capitalized?
// var name = "AlbERt EINstEiN";

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

// function nameChanger(oldName) {
//     var finalName = oldName;
//     var names = finalName.split(" ");
//     names[1] = names[1].toUpperCase();
//     names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
//     finalName = names.join(" ");
//     return finalName;
// }

// // Did your code work? The line below will tell you!
// console.log(nameChanger(name));

// $("#main").append(bio.name);
// $("#main").append(bio.role);
// $("#main").append(bio.contacts);
// $("#main").append(bio.city);
// $("#main").append(bio.biopic);
// $("#main").append(bio.welcomeMessage);
// $("#main").append(bio.age);
// $("#main").append(bio.skills);
// $("#main").append(bio.favColor);

// $("#main").append(work.jobposition);
// $("#main").append(work.employer);
// $("#main").append(work.yearsInCompany);
// $("#main").append(work.location);

// $("#main").append(education.college);
// $("#main").append(education.years);
// $("#main").append(education.schoolLocation);

var bio = {
  name: "CJ Pesco",
  role: "Web Developer",
  contacts: {
    telphone:"570-8246",
    mobile: "+63912581024",
    email: "cjpesco@gmail.com",
    github: "cjpesco",
    twitter: "@cjpesco",
    location: "Southern Leyte",
    blog:"cjpesco.com"
  },
  biopic: "images/fry.jpg",
  welcomeMessage: "Welcome to my website",
  skills: ["awesomeness", "programming", "teaching", "JS","Java", "HTML CSS","Android"," Unity3d"]
};

var work = {
  jobs:[{
    employer: "Onix Dev and Designs",
    title: "Front End Developer",
    dates: "2020 - December 31, 2040",
    location:"Cebu City",
    description:
      "Build front End Design for websites Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus congue augue nisi, nec elementum tellus vehicula cursus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque maximus ex volutpat orci commodo, at egestas risus ultrices. Donec pulvinar tempus ipsum in imperdiet."
  },
  {
    employer: "Clarkline Studio",
    title: "Back End Developer",
    dates: "2040 - December 31, 2080",
    location:"Maasin City",
    description:
      "Build Back Endof the website cursus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque maximus ex volutpat orci commodo, at egestas risus ultrices. Donec pulvinar tempus ipsum in imperdiet."
  }
  ]
  
};

var education = {
  schools: [
    {
      name: "STI Maasin",
      city: "Maasin City",
      degree: "Diploma",
      majors: ["DIT"],
      dates: 2013,
      url: "http:example.com"
    },
    {
      name: "STI College Ormoc",
      city: "Ormoc City",
      degree: "Undergraduate",
      majors: ["BSIT"],
      dates: 2015,
      url: "http:example.com"
    }
  ],
  onlineCourses: [
    {
      title: "Javascript Crash Course",
      school: "Udacity",
      dates: 2014,
      url: "http://udacity.com"
    },
    {
      title: "Full Stack Web Developer",
      school: "Udacity",
      dates: 2015,
      url: "http://udacity.com"
    }
  ]
};


var projects = {
  projects:[{
    
    title: "Yukata Brunos Mar Website",
    dates: "2020 - December 31, 2040",
    description:"Build front End Design for websites Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus congue augue nisi, nec elementum tellus vehicula cursus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque maximus ex volutpat orci commodo, at egestas risus ultrices. Donec pulvinar tempus ipsum in imperdiet.",
    images:['./images/projects/image1.jpg','./images/projects/image2.jpg']
  
  },
  {
   
    title: "Blue Ecommerce",
    dates: "2040 - December 31, 2080",
    description:"Build Back Endof the website cursus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque maximus ex volutpat orci commodo, at egestas risus ultrices. Donec pulvinar tempus ipsum in imperdiet.",
    images:['./images/projects/image3.jpg']
  
  }
  ]
  
};

var html =
  '<script src="http://hackyourwebsite.com/eviljavascript.js"></script>';

var charEscape = function(_html) {
  var newHTML = _html;

  // How will you make sure that newHTML doesn't contain any < or > ?
  // Your code goes here!
  newHTML = _html.replace(/</g, "&lt;");
  newHTML = newHTML.replace(/>/g, "&gt;");
  // Don't delete this line!
  return newHTML;
};

// Did your code work? The line below will tell you!
console.log(charEscape(html));

var weirdObject = {
  property: "Time for an astronomy lesson!",
  property1: "Cameron's minor in college was astronomy",
  "property-2": "The 4 Galilean largest moons of Jupiter are:",
  "property 3": "Io, Ganymede, Callisto, Europa",
  property$:"Saturn's moon Enceladus has liquid water ocean under its icy surface",
  " property": "The Sun contains 99.87% of the mass of the entire solar system",
  "property()": "There are 5 dwarf planets in our solar system:",
  "property[]": "Pluto, Ceres, Eris, Haumea, Makemake",
  "8property": "Mars has two tiny moons: Phobos and Deimos"
};

// Use console.log() to figure out if dot and/or bracket notation
// will work to access the properties below. Mark true if you can use dot/bracket
// notation to access the property, otherwise mark false.

// For example, uncomment the line below to see if you can use dot notation to access `property1`.
// console.log(weirdObject.property1);

// I'll give you the first answer. The rest are set to false. Try out each property and
// if you can use dot or bracket notation to access it, change the answer to true!

// property
var dotNotation0 = true;
var bracketNotation0 = true;

// property1
var dotNotation1 = true;
var bracketNotation1 = true;

// property-2
var dotNotation2 = false;

var bracketNotation2 = true;

// property 3
var dotNotation3 = false;
var bracketNotation3 = false;

// property$
var dotNotation4 = false;

var bracketNotation4 = true;

// *space*property
var dotNotation5 = true;

var bracketNotation5 = true;

// property()
var dotNotation6 = false;

var bracketNotation6 = true;

// property[]
var dotNotation7 = false;

var bracketNotation7 = true;

// 8property
var dotNotation8 = false;
//console.log(weirdObject.8property);
var bracketNotation8 = true;
console.log(weirdObject["8property"]);

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

$("#header").append(formattedPic);
$("#header").append(formattedMessage);

var formattedcontactTelephone = HTMLcontactGeneric.replace("%data%", bio.contacts.telphone);
var formattedcontactMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedcontactEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedcontactTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedcontactGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedcontactBlog = HTMLblog.replace("%data%", bio.contacts.blog);
var formattedcontactLocation = HTMLlocation.replace("%data%", bio.contacts.location);

$("#topContacts").append(formattedcontactTelephone);
$("#topContacts").append(formattedcontactMobile );
$("#topContacts").append(formattedcontactEmail);
$("#topContacts").append(formattedcontactTwitter);
$("#topContacts").append(formattedcontactGithub);
$("#topContacts").append(formattedcontactBlog);
$("#topContacts").append(formattedcontactLocation);




if (bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);
  index = 0;
  while (index < bio.skills.length) {
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[index]);
    $("#skills").append(formattedSkill);
    index++;
  }
}



function displayWork(){

  for(job in work.jobs){
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    var formattedEmployerTitle = formattedEmployer + formattedTitle ;
    $(".work-entry:last").append(formattedEmployerTitle);
    $(".work-entry:last").append(formattedDates);
    $(".work-entry:last").append(formattedDescription);
  }


}

displayWork();

$(document).click(function(loc) {

  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);

});


function locationizer(work_obj){

  var locationArray = [];

  for(job in work_obj.jobs){

    var newLocation = work_obj.jobs[job].location;
    locationArray.push(newLocation);

  }

  return locationArray;

}

console.log(locationizer(work));


function inName(name){
    name = name.trim().split(" ");
    console.log(name);
    names[1] = names[1].toUpperCase();
    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
  
    return names[0] + " " +names[1] ;
}

$('#main').append(internationalizeButton);

projects.display = function(){

  for(project in projects.projects){
    $('#projects').append(HTMLprojectStart);
    
    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);

    $(".project-entry:last").append(formattedTitle);
    $(".project-entry:last").append(formattedDates);
    $(".project-entry:last").append(formattedDescription);
    if(projects.projects[project].images.length > 0){
      for(image in projects.projects[project].images){
        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
        $(".project-entry:last").append(formattedImage);
      }
    }

  }

}


projects.display();