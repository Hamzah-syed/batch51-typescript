import inquirer from 'inquirer';
let answer = await inquirer.prompt([
    {
        type: 'input',
        name: 'f',
        message: `What's your first name?`
    },
]);
answer.f;
