// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  //shield io for badges
  # ${data.license}

  ## Description
  
  ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  
  ## Installation 
  To install necessary dependencies, run the following command: 

  \`\`\`
  ${data.installation}
  \`\`\`        
          
  ## Usage

  ${data.usage}
  
  ## Contributing
  
  ${data.contributing}

  ## Tests
  
  ${data.tests}
  
  ## Github 
  ${data.github}
  # Email
  ${data.email}
`;
}
module.exports = generateMarkdown;
