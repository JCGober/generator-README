var inquirer = require("inquirer")

inquirer
.prompt([
    {
        type: "input",
        message: "What is the name of your project?",
        name: "project" 
    },
    {
        type: "input",
        message: "Please Write a description of your application:",
        name: "description"
    }
])