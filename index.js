// TODO: Include packages needed for this application
// var inquirer = require("inquirer");
import inquirer from "inquirer";

// TODO: Create an array of questions for user input
inquirer.prompt([
  {
    type: "input",
    name: "projectTitle",
    message: "What is the title of your project",
  },
  {
    type: "input",
    name: "description",
    message: "Provide a short description of your project",
  },
  //Installation (installation instructions)
  // Usage (usage information)
  //Contributing (contribution guidelines)
  //Tests (test instructions)
  //choose a license
  //License (add a notice explaining which license is chosen)
  //Questions (enter email address, github username)
  //clickable links to corresponding sections of README
]);
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
