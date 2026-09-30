const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const read = (relativePath) => fs.readFileSync(path.join(root, relativePath), "utf8");
const assertContains = (source, expected, label) => {
  if (!source.includes(expected)) {
    throw new Error(`Falha na proteção contra tela branca: ${label}`);
  }
};

const preload = read("decompiled-app/dist-electron/preload/index.js");
const main = read("decompiled-app/dist-electron/main/main.cjs");
const renderer = read("decompiled-app/dist/assets/index.5RzZrdOY.js");

assertContains(
  preload,
  'ipcRenderer.invoke("deskpro-task", ...omit)',
  "as tarefas da interface precisam usar IPC assíncrono"
);
assertContains(
  main,
  'ipcMain.handle("deskpro-task"',
  "o processo principal precisa atender tarefas assíncronas"
);
assertContains(
  main,
  'code = "task_failed"',
  "toda falha de tarefa precisa gerar uma resposta segura"
);
assertContains(
  main,
  'error2.code = "task_timeout"',
  "tarefas travadas precisam ter limite de tempo"
);
assertContains(
  main,
  'ensureDirSync(import_path.default.join(import_electron4.app.getPath("userData"), "database"))',
  "a pasta do banco precisa existir antes da inicialização"
);
assertContains(
  renderer,
  "setAllContactList:(n,e)=>{n.contactList=Array.isArray(e.payload)?e.payload:[]}",
  "a lista de contatos precisa ser normalizada"
);
assertContains(
  renderer,
  "getAllContact failed",
  "a leitura de contatos precisa tratar falhas"
);
assertContains(
  renderer,
  "Q1(y0=>y0.whatsapp.contactList)??[]",
  "a tela de contatos precisa ter uma lista padrão"
);

console.log("Proteções contra tela branca validadas com sucesso.");
