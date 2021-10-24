// Sub-Classes
const Engineer = require("./lib/Engineer")
const Manager = require("./lib/Manager")
const Intern = require("./lib/Intern")
// Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");



// TODO: Create an array of questions for user input
const htmlQuestions = [
  {
    type: "input",
    message: "What is the title of your application?",
    name: "title", 
  },
  {
    type: "input",
    message: "Provide a description of your application?",
    name: "description",
  },
  {
    type: "input",
    message: "How can others you install your application?",
    name: "installation",
  },
  {
    type: "input",
    message: "How do you use your application?",
    name: "usage",
  },
  {
    type: "checkbox",
    message: "What License did you use for this repository?",
    choices: 
    [ "MIT",
      "GNU General Public License 2.0",
      "Apache License 2.0",
      "GNU General Public License 3.0"],
    name: "license", 
  },
  {
    type: "input",
    message: "How can others contribute to this project?",
    name: "contributing",
  },
  {
    type: "input",
    message: "How can others update the tests for your project?",
    name: "tests"
  },
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "github",
  },
  {
    type: "input",
    message: "What is your email address where users can contact you?",
    name: "email",
  },
  {
    type: "input",
    message: "Is there any other information you wish to provide?",
    name: "other",
  }
];

// TODO: Create a function to write HTML file
function promptUser() {
  inquirer
    .prompt(htmlQuestions)
    .then((response) =>
      fs.writeFileSync("index.html", generate.generateHtml(response))
    )
    .then(() => console.log("Successfully wrote to index.html"))
    .catch((err) => console.error(err));
}

promptUser();