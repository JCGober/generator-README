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
        type: "input",
        message: "Table Of Contents:",
        name: "table"
    },
    {
        type: "input",
        message: "Please add instalation information:",
        name: "install"

    },
    {
        type: "input",
        message: "Please add any additional usage information:",
        name: "usage"

    },
    {
        type:"list",
        message: "Which license does your project have?",
        name: "license",
        choices: [
            "MIT",
            "APACHE 2.0",
            "GPL 3.0",
            "GOBER LTD",
            "NONE"
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

    let readme= `# Project Title: ${answers.project}

    ## *Description:* 

    ${answers.description}

    ## *Table of Contents:*

    ${answers.table}

    ## *Instructions for Installation:*

    ${answers.install}

    ## *Usage Information*

    ${answers.usage}

    ## *License:* 

    ${answers.license}

    ## *GitHub User:* 

    ${answers.gitUser}

    ## *Contact Email for any additional questions:* 
    
    ${answers.Email}

    `;

    fs.writeFile("README2.md", readme, function(err){

        if (err) {
            return console.log(err)
        }
    })

});