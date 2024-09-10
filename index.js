const inquirer = require("inquirer");
const fs = require("fs");
const svg = require("svg");

//Logo constructor; inheritance demonstrated as color selecting as word or hexidecimal
const generateLogo = ({string, fillcolor, shape, shapecolor}) => {
    this.string = string;

    const color1 = new fillcolor;
    const color2 = new shapecolor;

    //Triangle, Circle, Square classes
    class shape{
        constructor(code){
            this.code = code;
        }
    }
    const circle = new shape('<circle cx ="150" cy="100" r="80" fill=' + ${shapecolor} + '></circle>');
    const square = new shape('<rect width ="160" height="160" x="70" y="20" fill=' + ${shapecolor} + '></rect>');
    const triangle = new shape('<polygon points =100 30, 70 170, 230 170 fill =' + ${shapecolor} + '/>');

    //polymorphism demonstrated as new color selecting as either word or hexidecimal
    function Color (fillcolor, shapecolor){
        generateLogo.call()
    }
    };

return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
${shape}
<text x="150" y="125" font-size="60" text-anchor="middle" fill=${fillcolor}>${string}</text></svg>`


//write Logo.svg file
function writetofile(fileName, data) {
    const logo = data;
    fs.writeFile('logo.svg', logo, (err) => {
        err ? console.error(err) : console.log('A new logo.svg file has been created.')
    });
}

function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Enter 3 characters in sequence.',
                name: 'string',
            },
            {
                type: 'list',
                message: 'Select how to enter color.',
                name: 'color1'
                choices: ['Enter name.',
                    'Enter hexidecimal value.']
            },
            {  
                type: 'input',
                message: 'Enter color name',
                name: 'fillcolor',
                when: (color1 = 'Enter name.'),
            },
            {
                type: 'input',
                message: 'Enter hexidecimal value',
                name: 'fillcolor',
                when: (color1 ='Enter hexidecimal value.'),
            },
            {
                type: 'list',
                message: 'Select a shape.',
                name: 'shape',
                choices: ['Circle',
                    'Triangle',
                    'Square'],
            },
            {
                type: 'list',
                message: 'Select how to enter color.',
                name: 'color2'
                choices: ['Enter name.',
                    'Enter hexidecimal value.']
            },
            {  
                type: 'input',
                message: 'Enter color name',
                name: 'fillcolor',
                when: (color2 = 'Enter name.'),
            },
            {
                type: 'input',
                message: 'Enter hexidecimal value',
                name: 'fillcolor',
                when: (color2 ='Enter hexidecimal value.'),
            },
        ])
        .then((response) => {
            writetofile('logo.svg', generateLogo(response));
        });
}

init();