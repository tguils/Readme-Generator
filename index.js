// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs");
const path = require("path");
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input


  const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'Enter the title of your project:'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter a description of your project:'
    },
    {
      type: 'input',
      name: 'table',
      message: 'Create a table of contents list:'
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Enter a description of the steps required to install your project:'
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide instructions for use (include screenshots):'
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license for your project:',
      choices: [ "MIT", 'Apache 2.0', 'GNU GPLv3' ]      
        //   name: 'MIT License',
        //   value: 'MIT',
        //   badge: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
        // },
        // {
        //   name: 'Apache License 2.0',
        //   value: 'Apache 2.0',
        //   badge: '[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
        // },
        // {
        //   name: 'GNU GPLv3',
        //   value: 'GNU GPLv3',
        //   badge: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
        },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your github link:'
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address:'
    },
  ];
  
// TODO: Create a function to write README file




  function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
  }


// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    console.log('README.md generated successfully!');
   writeToFile('README.md', generateMarkdown({...answers}))
})}

// Function call to initialize app
init();
