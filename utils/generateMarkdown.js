// A function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (!license) {
    return " ";
  }
  if (license === "MIT") {
    return `
  ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
  `;
  } else if (license === "BOOST 1.0") {
    return `
  [![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)
  `;
  } else if (license === "ISC") {
    return `
  ![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)
    `;
  } else if (license === "APACHE 2.0") {
    return `
  ![License: Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)
    `;
  } else if (license === "BSD") {
    return `
  ![License: BSD](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)
    `;
  } else {
    return `
  ![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)
    `;
  }
}

// A function that returns the license link
function renderLicenseLink(license) {
  if (!license) {
    return " ";
  }
  if (license === "MIT") {
    return `[License: MIT](https://opensource.org/licenses/MIT)`;
  } else if (license === "BOOST 1.0") {
    return `[License: BOOST](https://opensource.org/licenses/BSL-1.0)`;
  } else if (license === "ISC") {
    return `[License: ISC](https://opensource.org/licenses/ISC)`;
  } else if (license === "APACHE 2.0") {
    return `[License](https://opensource.org/licenses/Apache-2.0)`;
  } else if (license === "BSD") {
    return `[License](https://opensource.org/licenses/BSD-2-Clause)`;
  } else {
    return `[License: GPL v3](https://www.gnu.org/licenses/gpl-3.0)`;
  }
}

// A function that returns the license section of README
function renderLicenseSection(license) {
  if (!license) {
    return " ";
  }
  return `${license}
- ${renderLicenseLink(license)}`;
}

// A function that returns links to the links section of the README
function renderLinks(links) {
  if (links === " ") {
    return " ";
  } else {
    return `- [Page Link](${links})
    `;
  }
}

// A function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  * [Contributing](#contribution)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Additional Links
  ${renderLinks(data.links)}

  ## License
  The Badge at the top of the page shows which license this project is under. Please click the link below for additional information about the license
  ${renderLicenseSection(data.license)}

  ## Contribution
  ${data.contribution}

  ## Tests
  ${data.tests}

  ## Questions
  Please contact me with any questions you have regarding my project.

  Github Name: ${data.credits}

  Email: ${data.email}

  Github: ${data.github}
`;
}

module.exports = generateMarkdown;
