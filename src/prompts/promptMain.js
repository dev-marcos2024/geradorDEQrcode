import chalk from "chalk";

const mainPrompt = [{
    name: "select",
    description: chalk.green("Escolha a ferramenta (1 - QRCODE OU 2 - PASSWORD)"),
    pattern: /^[1-2]+$/,
    message: chalk.red("Escolha apenas entre 1 e 2"),
    required: true,
}];

export {mainPrompt}