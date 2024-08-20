import prompt from "prompt";
import { mainPrompt } from "./prompts/promptMain.js";
import  {createQrcode} from "./services/qrcode/create.js";
import { createPassword } from "./services/password/create.js";


async function main(){
    prompt.get(mainPrompt, async (err, result) => {

        if (result.select == 1) await createQrcode();
        if (result.select == 2) await createPassword();
    });

    prompt.start()
}

main()