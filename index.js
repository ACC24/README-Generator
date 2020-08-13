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
                name: 'MIT',
            },
            {
                name: 'ISC',
            },
            {
                name: 'GPLv3',
            },
            {
                name: 'ODbl',
            },
            {
                name: 'Perl',
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
        writeToFile("README.md", generateMarkdown({...answers}));
    })
};

// function call to initialize program
init();
