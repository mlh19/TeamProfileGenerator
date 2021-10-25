// Sub-Classes
const Engineer = require("./lib/Engineer")
const Manager = require("./lib/Manager")
const Intern = require("./lib/Intern")
// Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
// Team Members array of objects
const teamMembers = [];
// Reference to the generateHtml.js file
const generate = require("./dist/generateHtml.js");

// Questions to fill in for the Manager constructor
const managerQuestions = [
	{
		type: 'input',
		message: "What is the Manager's name?",
		name: 'name',
	},
	{
		type: 'input',
		message: "What is the Manager's ID number?",
		name: 'managerId',
	},
	{
        type: 'input',
		message: "What is the Manager's e-mail?",
		name: 'email',
	},
	{
		type: 'input',
		message: "What is the Manager's office number?",
		name: 'officeNumber',
	}
];


// Questions to fill in for the Engineer constructor
const engineerQuestions = [
	{
		type: 'input',
		message: "What is the Engineer's name?",
		name: 'name',
	},
	{
		type: 'input',
		message: "What is the Engineer's ID number?",
		name: 'engineerId',
	},
	{
        type: 'input',
		message: "What is the Engineer's e-mail?",
		name: 'email',
	},
	{
		type: 'input',
		message: "What is the Engineer's GitHub Username?",
		name: 'githubUsername',
	},
];
// Questions to fill in for the Intern constructor
const internQuestions = [
	{
		type: 'input',
		message: "What is the Intern's name?",
		name: 'name',
	},
	{
		type: 'input',
		message: "What is the Intern's ID number?",
		name: 'managerId',
	},
	{
        type: 'input',
		message: "What is the Intern's e-mail?",
		name: 'email',
	},
	{
		type: 'input',
		message: "What school is the Intern attending?",
		name: 'school',
	},
];
// Function to prompt user questions about the Manager
function promptManagerQuestions() {
    inquirer
    .prompt(managerQuestions)
    .then((response) => {
    console.log(response);
    // Gets the value for each key and assigns them individually in those variables.
    const {name, managerId, email, officeNumber} = response;
    // Create a new Manager instance and add it to the list.
    const manager = new Manager(name, managerId, email, officeNumber);
    teamMembers.push(manager);
    // Call the next questions.
    promptMenu();

    //   fs.writeFileSync("index.html", generate.generateHtml(response))
    })
    .then(() => console.log("Successfully wrote to index.html"))
    .catch((err) => console.error(err));
}


function promptMenu() {
    inquirer
    .prompt([
        {
            type: 'list',
            name: 'menuOption',
            message: "What would you like to do next",
            choices: [
                'Add an Engineer',
                'Add an Intern',
                'Finish Building My Team'
            ]
        }
    ])
    .then((response) => {
        if(response.menuOption === 'Add an Engineer') {
            promptEngineerQuestions();
        } else if (response.menuOption === 'Add an Intern') {
            promptInternQuestions();
        } else if (response.menuOption === 'Finish Building My Team') {
            promptTeamQuestions();
        } else {
            console.log("No option exists named " + response.menuOption);
        }
    })
}
// Function to prompt user questions about the Engineer
function promptEngineerQuestions() {
    inquirer
    .prompt(engineerQuestions)
    .then((response) => {
    console.log(response);
    // Gets the value for each key and assigns them individually in those variables.
    const {name, engineerId, email, githubUsername} = response;
    // Create a new Manager instance and add it to the list.
    const engineer = new Engineer(name, engineerId, email, githubUsername);
    teamMembers.push(engineer);
    // Call the next questions.
    promptMenu();
    })
}
// Function to prompt user questions about the Intern
function promptInternQuestions() {
    inquirer
    .prompt(internQuestions)
    .then((response) => {
    console.log(response);
    // Gets the value for each key and assigns them individually in those variables.
    const {name, internId, email, school} = response;
    // Create a new Manager instance and add it to the list.
    const intern = new Intern(name, internId, email, school);
    teamMembers.push(intern);
    promptMenu();


 fs.writeFileSync("index.html", generate.generateHtml(response))
    })
    .then(() => console.log("Successfully wrote to index.html"))
    .catch((err) => console.error(err));
}











// Entry to the Program
promptManagerQuestions();