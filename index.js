// array of questions for user
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

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

// function to write README file

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
};

// function to initialize program
function init() {
    inquirer.prompt(questions).then((answers) => {
        // let newAnswers = JSON.stringify(answers, null, '  ')
        console.log(answers);
        writeToFile("README.md", generateMarkdown({...answers}));
    })
};

// function call to initialize program
init();
