"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Set array of jobs to display
jobs = ["Cyber Security Engineer", "Cyber Security Analyst", "Front-End Web Designer", "Game Developer"]; // Set a class for each slide option

var jobclass =
/*#__PURE__*/
function () {
  function jobclass(title, caption, para, img) {
    _classCallCheck(this, jobclass);

    this.title = title;
    this.caption = caption;
    this.para = para;
    this.img = img;
  } // Method to return data from object to html slides


  _createClass(jobclass, [{
    key: "slidereturn",
    value: function slidereturn() {
      document.getElementById("titlechoose").innerHTML = this.title;
      document.getElementById("captionchoose").innerHTML = this.caption;
      document.getElementById("parachoose").innerHTML = this.para;
      document.getElementById('imagechoose').src = this.img;
    }
  }]);

  return jobclass;
}(); // Create job objects for use in the slides


var firstjob = new jobclass("Cyber Security Engineer", "&#9784;  Keeping Singapore Safe", "Cybersecurity engineers locate threats and vulnerabilities, prevent malware and hacking attempts in different types of software, while designing different methods to prevent cyber-crime.", // Image by https://www.pngegg.com/
"https://i.imgur.com/w7WX97S.png");
var secondjob = new jobclass("Cyber Security Analyst", "&#9784;  Keeping Singapore Safe", "A cyber security analyst prevents companies from being attacked by cyber attacks by employing different methods such as keeping up with IT trends, teaching staff about internet safety, and viewing suspicious acitvities.", // Image by https://www.pngegg.com/
"https://i.imgur.com/Hpgm8do.png");
var thirdjob = new jobclass("Front-End Web Designer", "&#9784;  Designs for the internet", "Front-end web development involves creating websites that are appealing to the public through the use of Javascript, CSS and HTML. Due to the ever changing nature of these languages, it might be hard to adapt to them quickly.", // Image by https://www.pngegg.com/
"https://i.imgur.com/sJNORD6.png");
var fourthjob = new jobclass("Game Developer", "&#9784;  Games for everyone", "A video game developer develops games that are fun and appealing to the public. They can use a variety of programming languages to do so, but the creation of a game can be very time consuming. A team of developers need to create sprites and write code for the game to run.", // Image by https://www.pngegg.com/
"https://i.imgur.com/M5oJFgt.png"); //Add a function that changes elements in the slide to reflect that of the current job being shown in the array.

function imagecheck() {
  if (jobs[x] == "Cyber Security Engineer") {
    firstjob.slidereturn();
  }

  if (jobs[x] == "Cyber Security Analyst") {
    secondjob.slidereturn();
  }

  if (jobs[x] == "Front-End Web Designer") {
    thirdjob.slidereturn();
  }

  if (jobs[x] == "Game Developer") {
    fourthjob.slidereturn();
  }
} //Upon loading the webpage, set up the slide image and text to correspond to the current job being displayed.


window.onload = function () {
  x = 1;
  document.getElementById("topic").innerHTML = jobs[x]; //Use an array method to create a string that displays the type of jobs available.

  document.getElementById("jobstring").innerHTML = "<span>The jobs I am consdering: " + jobs.join(" , ");
  +"." + "</span>";
  imagecheck();
}; //Add a function that increaases the page number / returns to 0 if end of array is reached


function nextpage() {
  x += 1;

  if (x > jobs.length - 1) {
    x = 0;
  }

  document.getElementById("topic").innerHTML = jobs[x];
  imagecheck();
} //Add a function that decreases the page number / goes to end of array if back of array is reached


function backpage() {
  x -= 1;

  if (x < 0) {
    x = jobs.length - 1;
  }

  document.getElementById("topic").innerHTML = jobs[x];
  imagecheck();
}