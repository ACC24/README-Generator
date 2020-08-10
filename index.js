// array of questions for user
var inquirer = require("inquirer");
var fs = require("fs");
var generateMarkdown = require(".utils/generateMarkdown.js");

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please enter your project title',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Project description',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Installation instructions',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Usage information',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Contribution guidelines',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Test intructions',
    },
    {
        type: 'checkbox',
        message: 'Choose a license for your application',
        name: 'license',
        choices: [
            {
                name: 'License 1',
            },
            {
                name: 'License 2',
            },
            {
                name: 'License 3',
            },
            {
                name: 'License 4',
            },
            {
                name: 'License 5',
            },
        ],
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
];
    inquirer.prompt(questions).then((answers) => {
    console.log();
    console.log(JSON.stringify(answers, null, '  '));
})

// function to write README file

// function writeToFile(fileName, data) {
    

        // fs.writeFile("README.md", questions.data, function(err) {

        //     if (err) {
        //       return console.log(err);
        //     }
        
        //     console.log("Success!");
        
        // //   });
// };


// function to initialize program
// function init() {

// }

// function call to initialize program
// init();
