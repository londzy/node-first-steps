

/*const greet = require('./greet');
console.log(greet('Londy'));*/

const chalk = require('chalk');
//import the greet module that is in the current folder
const greet = require('./greet');

const styledMessage = chalk.bgGreen.black(greet('Xola'));
console.log(styledMessage)

var figlet = require('figlet');

figlet('Hello Londy!!', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    const styledMessage = chalk.bgGreen.black(data);

    console.log(styledMessage)
});
