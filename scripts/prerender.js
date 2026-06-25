import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, "..", p);

// Busca recursiva para encontrar o arquivo compilado do entry-server
function findEntryServerFile(dir) {
  if (!fs.existsSync(dir)) return null;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      const found = findEntryServerFile(fullPath);
      if (found) return found;
    } else if (file.startsWith("entry-server") && file.endsWith(".js")) {
      return fullPath;
    }
  }
  return null;
}

async function prerender() {
  const template = fs.readFileSync(toAbsolute("dist/index.html"), "utf-8");
  
  const distServerPath = toAbsolute("dist-server");
  const entryServerFile = findEntryServerFile(distServerPath);
  
  if (!entryServerFile) {
    throw new Error("Não foi possível encontrar o arquivo compilado do entry-server em dist-server/!");
  }
  
  console.log(`➔ Importando entry-server de: ${entryServerFile}`);
  
  // Importa dinamicamente usando uma URL absoluta do arquivo para evitar erros do Node
  const fileUrl = new URL(`file://${entryServerFile}`);
  const module = await import(fileUrl.href);
  
  // Suporta exports diretos (ESM) ou via default (CommonJS / UMD compilados)
  const render = module.render || (module.default && module.default.render);
  
  if (typeof render !== "function") {
    console.error("Conteúdo do módulo importado:", module);
    throw new Error("A função 'render' não foi encontrada ou não é uma função no entry-server!");
  }

  const { html: appHtml } = render();

  // Substitui o placeholder pelo HTML renderizado
  const html = template.replace(`<!--app-html-->`, appHtml);

  fs.writeFileSync(toAbsolute("dist/index.html"), html);
  console.log("✓ HTML pré-renderizado injetado com sucesso em dist/index.html!");
}

prerender().catch(console.error);
