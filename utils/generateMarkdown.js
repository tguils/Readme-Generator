
function renderLicenseBadge(license) {
  if (license) {
    const encodedLicense = encodeURIComponent(license);
    return `![License](https://img.shields.io/badge/license-${encodedLicense}-brightgreen.svg)`;
  }
  return '';
}


function renderLicenseLink(license) {
  if (license) {
    return `- [License](#license)`;
  }
  return '';
}


function renderLicenseSection(license) {
  if (license) {
    return `## License

This project is licensed under the ${license} license.`;
  }
  return '';
}


function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license);
  const licenseSection = renderLicenseSection(data.license);
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  
  ${data.description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  ${renderLicenseLink(data.license)}
  - [Questions](#questions)
  
  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}
  
  ${renderLicenseSection(data.license)}
  
  ${renderLicenseBadge(data.license)}

  
  ## Questions
  
  For any questions, please contact me:
  
  - GitHub: [${data.github}](https://github.com/${data.github})
  - Email: ${data.email}
`;
}

module.exports = generateMarkdown;
