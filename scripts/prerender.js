import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, "..", p);

async function prerender() {
  const template = fs.readFileSync(toAbsolute("dist/index.html"), "utf-8");
  
  // Importa o arquivo de entrada SSR compilado pelo Vite
  const { render } = await import("../dist-server/entry-server.js");
  const { html: appHtml } = render();

  // Substitui o placeholder no index.html pelo HTML renderizado
  const html = template.replace(`<!--app-html-->`, appHtml);

  fs.writeFileSync(toAbsolute("dist/index.html"), html);
  console.log("✓ HTML pré-renderizado injetado com sucesso em dist/index.html!");
}

prerender().catch(console.error);
