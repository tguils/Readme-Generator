// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs");
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
      choices: [
        'Installation',
        'Usage',
        'License',
        'Badges',
        'Contributing',
        'Github',
        'Email'
      ]
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
      type: 'input',
      name: 'license',
      message: 'Choose license options:'
    },
    {
      type: 'input',
      name: 'badges',
      message: 'Choose between badge options:'
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
function writeToFile(answers) {

  const tableOfContents = answers.table.map(item => `- [${item}](#${item.toLowerCase()})`).join('\n');
    return `
    # ${answers.title}
    
    ## Description
    ${answers.description}
    
    ## Table of Contents
    ${tableOfContents}
    
    
    ## Installation
    ${answers.installation}
    // Add installation instructions here
    
    ## Usage
    ${answers.usage}
    // Add usage information here
    
    ## License
    ${answers.license}
    // Add license badge and notice here
    
    ## Badges
    ${answers.badges}
    // Add contribution guidelines here
    

    
    ## Questions
    GitHub Profile: [${answers.github}](https://github.com/${answers.github})
    Email: ${answers.email}
    `;
}

inquirer.prompt(questions).then((answers) => {
  const readmeContent = writeToFile(answers);

  fs.writeFile('README.md', readmeContent, (err) => {
    if(err) {
      console.error(err);
    } else {
      console.log('README.md generated successfully!');
    }
  });
});
// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
