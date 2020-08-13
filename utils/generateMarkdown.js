// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ![License](https://img.shields.io/badge/License-${data.license}-blue.svg)
  
  ## Description
  
  ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation 
  
  To install necessary dependencies, run the following command: 

  \`\`\`
  ${data.installation}
  \`\`\`        
          
  ## Usage

  ${data.usage}
  
  ## License 
  
  This project is licensed under the ${data.license} license.
     
  ## Contributing
  
  ${data.contributing}

  ## Tests
  
  ${data.tests}

  ## Questions

  For questions or comments, you can reach me at: ${data.email}

  Find out more about my work at: [https://github.com/${data.github}/](https://github.com/${data.github}/).
`;
}

module.exports = generateMarkdown;
