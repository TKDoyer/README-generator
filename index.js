// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const generatorMarkdown = require('../Develop/utils/generateMarkdown.js');
const { resolve } = require('path');




// TODO: Create an array of questions for user input
const questions = [
    {
        // Title
        type: 'input',
        message: 'what will you name the project?',
        name: 'Name',

    }, {
        // Description
        type: 'input',
        message: 'What will your project be? Explain',
        name: 'Discribe the project',
    }, {
        // Usage
        type: 'input',
        message: 'What is the project used for?',
        name: 'usage',
    }, {
        // License
        type: 'list',
        message: 'What license does your project use?',
        choices: ['None', 'MIT', 'GVL-GPL', 'APACHE', 'BSD',],
        name: 'license',
    }, {
        // Contributing
        type: 'input',
        message: 'How can people contribute',
        name: 'Contributions',
    },
    // {
    //     // Questions
    //     type: 'input',
    //     message: '',
    //     name: 'Questions',



]

// TODO: Create a function to write README file
function writeToFile(fileName, reject) {
    fs.writeFile('./generatedREADME.md', error => {
        if (error) {
            console.log("An error has occurred. Abort everything!");
            return callback(error);
        }

    })

}



// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answer => {

        const response = generatorMarkdown(answer)

        writeToFile('README.md', response)
    })
}

// Function call to initialize app
init();











