

import inquirer from 'inquirer';
import chalk from 'chalk';
import { questions } from './questions.js';

async function askForInfo(): Promise<void> {
  try {
    const user: { name: string; age: number } = await inquirer.prompt(
      questions
    );

    console.log(
      chalk.bgCyan(`Assalaam O Alikum, ${user.name} you are (${user.age} years old)!`)
    );
  } catch (error) {
    console.error(error);
  }
}

await askForInfo();