import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createServer } from "vite";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, "..", p);

async function prerender() {
  console.log("➔ Iniciando servidor Vite SSR temporário para pré-renderização...");
  
  // Cria um servidor Vite em modo middleware (sem escutar portas) para transpilar o JSX em tempo real
  const vite = await createServer({
    server: { middlewareMode: true },
    appType: "custom"
  });

  try {
    // Carrega o entry-server diretamente das fontes transpilando em tempo real
    console.log("➔ Transpilando e carregando src/entry-server.jsx...");
    const { render } = await vite.ssrLoadModule(toAbsolute("src/entry-server.jsx"));
    
    if (typeof render !== "function") {
      throw new Error("A função 'render' não foi encontrada no módulo carregado!");
    }

    console.log("➔ Renderizando aplicação para string HTML...");
    const { html: appHtml } = render();

    // Lê o index.html gerado pelo build do cliente
    const template = fs.readFileSync(toAbsolute("dist/index.html"), "utf-8");

    // Injeta o HTML pré-renderizado no placeholder
    const html = template.replace(`<!--app-html-->`, appHtml);

    fs.writeFileSync(toAbsolute("dist/index.html"), html);
    console.log("✓ HTML pré-renderizado injetado com sucesso em dist/index.html!");
  } finally {
    // Fecha o servidor do Vite para liberar recursos
    await vite.close();
  }
}

prerender().catch((err) => {
  console.error("❌ Erro durante a pré-renderização:", err);
  process.exit(1);
});
