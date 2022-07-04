// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = ''
  if(license === 'MIT') {
    badge = '[]()'
  } else if (license === 'GVL-GPL') {
    badge = '[]()'
  } else if (license === 'APACHE') {
    badge = '[]()'
  } else {
    badge = ''
  }
  return badge
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = ''
    if (license === 'MIT') {
   licenseLink = ''
     } else if (license === ' GVL-GPL') {
   licenseLink = ''
    } else if (license === 'APACHE') {
   licenseLink = ''
     } else {
   licenseLink = ''
     }
     return licenseLink
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = ''
  if(license === 'none') {
    licenseSection = ''
  } else {
    licenseSection =
    'license: ${license}'
  }
  return licenseSection
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answer) {

  return `# ${answer.title}
 ## ${renderLicenseSection(answer.license)}
 ### ${renderLicenseLink(answer.license)}
`;
}

module.exports = generateMarkdown;
