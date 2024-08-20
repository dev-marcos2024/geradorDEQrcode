import chalk from "chalk";

const qrcodePrompt = [
    {
    name: "link",
    description: chalk.yellow("Digite o link para gerar o QRCODE"),
    },
    {
        name: "type",
        description: chalk.yellow("Ecolha entre o tipo de QRcode (1 - NORMAL ou 2 - TREMINAL)"),
        pattern: /^[1-2]+$/,
        message: chalk.red("Escolha apenas entre 1 ee 2."),
        required: true
    },
    
];

export {qrcodePrompt}