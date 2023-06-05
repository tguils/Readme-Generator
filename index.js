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
      type: 'checkbox',
      name: 'table',
      message: 'Create a table of contents list:',
      choices: [ "Title", "Description", "Installation", "Usage", "Licenses", "Contact"]
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
      type: 'checkbox',
      name: 'license',
      message: 'Choose a license for your project:',
      choices: [ "MIT", 'Apache 2.0', 'GNU GPLv3' ]      
        
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
