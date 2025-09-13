import chalk from "chalk"

const promptSchemaMain = [
    {
        name: "select",
        description: chalk.yellow("Escolha a ferramenta (1 - QR Code Generator ou 2- Password Generator)"),
        pattern: /^[1-2]+$/,
        message: chalk.red.italic("Escolha apenas entre 1 e 2"),
        required: true,
    }
];

export default promptSchemaMain;