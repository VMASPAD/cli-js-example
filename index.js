import inquirer from 'inquirer';
import ora from 'ora';
import chalk from 'chalk';

// Función para el selector de dos opciones
async function selectTwoOptions() {
    const { option } = await inquirer.prompt([
        {
            type: 'list',
            name: 'option',
            message: chalk.blue('Selecciona una opción:'),
            choices: [chalk.green('Opción 1'), chalk.red('Opción 2')],
        },
    ]);
    console.log(chalk.yellow(`Has seleccionado: ${option}`));
}

// Función para el selector de colores
async function selectColor() {
    const { color } = await inquirer.prompt([
        {
            type: 'list',
            name: 'color',
            message: chalk.blue('Selecciona un color:'),
            choices: [
                chalk.red('Rojo'),
                chalk.green('Verde'),
                chalk.blue('Azul'),
                chalk.yellow('Amarillo'),
                chalk.magenta('Naranja'),
            ],
        },
    ]);
    console.log(chalk.yellow(`Has seleccionado el color: ${color}`));
}

// Función para el temporizador de 5 segundos
async function startTimer() {
    const spinner = ora(chalk.blue('Cargando...')).start();

    // Simula un temporizador de 5 segundos
    await new Promise((resolve) => setTimeout(resolve, 5000));

    spinner.succeed(chalk.green('Carga completada!'));
}

// Función principal
async function main() {
    await selectTwoOptions();
    await selectColor();
    await startTimer();
}

main().catch((error) => {
    console.error(chalk.red('Error:'), error);
});
