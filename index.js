let inquirer = require("inquirer");

var fs = require("fs");

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
    }, 
    {
        type:"list",
        message: "Which license does your project have?",
        name: "license",
        choices: [
            "option1",
            "option2",
            "none"
        ]
    },
    {
        type: "input",
        message: "What is Your github username?",
        name: "gitUser"
    },
    {
        type: "input",
        message: "What is your contact email?",
        name: "Email"
    }
]).then(function(answers){

    fs.writeFile("README.md", JSON.stringify(answers), function(err){

        if (err) {
            return console.log(err)
        }
    })

});