import prompt from "prompt";
import { qrcodePrompt } from "../../prompts/promptQrcode.js";
import { handle } from "./handler.js";

async function createQrcode(){

    prompt.get(qrcodePrompt, handle);

    prompt.start();
}

export  {createQrcode}