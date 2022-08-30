import greet from './greet.js'
import chalk from 'chalk';
import fun from 'everyday-fun';
import figlet from 'figlet';


console.log(greet('Xola'))
console.log(greet('Atuhaire'))

const styledMessage = chalk.bgGreen.black(greet('Xola'));
console.log(styledMessage)

console.log(chalk.blue('Hello world!'));
console.log(chalk.blue.bgRed.bold(greet('Mutoni')));



figlet('The teller...', function (err, result) {
    console.log(chalk.blue.bgBlue.bold(result));
    const teaser = fun.getRandomRiddle();
    console.log(chalk.bgGreen.bold(teaser.riddle));
    setTimeout(function () {
        console.log(chalk.blue.bgGreen.bold(teaser.answer));
    }, 5000)

});

