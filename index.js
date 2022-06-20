//Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// An array of questions for user input
const questions = [
  {
    type: "input",
    name: "credits",
    message: "Please enter your GitHub username ",
  },
  {
    type: "input",
    name: "github",
    message: "Please enter your GitHub url",
  },
  { type: "input", name: "title", message: "What is the title of your project?" },
  { type: "input", name: "description", message: "Please enter a description of your project." },
  { type: "input", name: "installation", message: "Please describe the steps required to install your project." },
  { type: "input", name: "usage", message: "Please provide instruction and examples for use of your project." },
  {
    type: "list",
    name: "license",
    message: "Which license are you using for your project?",
    choices: [
      { name: "MIT", value: "MIT" },
      { name: "ISC", value: "ISC" },
      { name: "APACHE 2.0", value: "APACHE" },
      { name: "BSD", value: "BSD" },
      { name: "GPL 3.0", value: "GPL" },
    ],
  },
  { type: "input", name: "contributing", message: "Please enter information for how other developers can contribute." },
  { type: "input", name: "tests", message: "Please provide examples of how to run your project tests." },
  { type: "input", name: "email", message: "Please enter your email address." },
  { type: "input", name: "repo", message: "Please enter the name of your github repository for this project." },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
