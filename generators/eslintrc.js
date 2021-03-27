const inquirer = require('inquirer');
const fs = require('fs');
const chalk = require('chalk');

inquirer
  .prompt({ type: 'confirm', message: 'Do you want to create .eslintrc.json file?', name: 'confirm' })
  .then((answer) => {
    if (answer.confirm.toLowerCase() === 'No') {
      process.exit(-1);
    } else if (answer.confirm.toLowerCase() === 'Yes') {
      fs.readFile('../exampleFiles/.eslintrc.json', 'utf8', (err1, data) => {
        if (err1) return console.error(err1);
        
        fs.writeFile('.eslintrc.json', data, (err2) => {
          if (err2) {
            return console.error(err2);
          } else if (!err2) {
            console.log(`${chalk.bold.green`.eslintrc.json`} ${chalk.green`has been generated!`}`); 
          }
        });
      }
  });
