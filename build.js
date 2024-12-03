const fs = require("fs");
const path = require("path");

const distPath = path.resolve(__dirname, "dist");

// Apaga a pasta `dist` se ela já existir
if (fs.existsSync(distPath)) {
  fs.rmSync(distPath, { recursive: true, force: true });
  console.log('Pasta "dist" limpa.');
}

// Cria a pasta `dist` novamente
fs.mkdirSync(distPath);
console.log('Pasta "dist" recriada.');

// Copia arquivos do `src` para `dist` (simulando build)
fs.cpSync("./src", "./dist", { recursive: true });
console.log('Arquivos copiados para "dist".');
