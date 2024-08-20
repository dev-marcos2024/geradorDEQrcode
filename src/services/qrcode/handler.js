import qr from 'qrcode-terminal';
import chalk from 'chalk';

async function handle(err, result) {
    if (err){
        console.log("Erro na aplicação !!!");
        return;
    }
    const isSmall = result.type == 2;

    qr.generate(result.link, {small: isSmall}, (qrcode)=>{
        console.log(chalk.green("QR Code gerrado com sucesso:\n"));
        console.log(qrcode);
    });
}

export {handle};