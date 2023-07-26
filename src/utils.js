import chalk from "chalk";

function httpResponse(status, message) {
  console.log(chalk.greenBright(`Status Code: ${status}. \n${message}`));
}


export { httpResponse };
