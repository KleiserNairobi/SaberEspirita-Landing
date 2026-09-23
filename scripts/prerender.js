import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createServer } from "vite";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, "..", p);

const ROUTES = [
  {
    url: "/",
    title: "Estudo Espírita e Cursos Gratuitos de Allan Kardec | Saber Espírita",
    description:
      "Estude a Doutrina Espírita com cursos gratuitos baseados na codificação de Allan Kardec (O Livro dos Espíritos, O Evangelho e mais). Baixe o app grátis!",
    canonical: "https://saberespirita.app.br/",
    outputs: ["dist/index.html"],
  },
  {
    url: "/terms",
    title: "Termos de Uso | Saber Espírita",
    description:
      "Termos e condições de uso do aplicativo Saber Espírita. Diretrizes para estudo e utilização da plataforma.",
    canonical: "https://saberespirita.app.br/terms",
    outputs: ["dist/terms/index.html", "dist/terms.html"],
  },
  {
    url: "/privacy",
    title: "Política de Privacidade | Saber Espírita",
    description:
      "Política de Privacidade e proteção de dados do aplicativo Saber Espírita. Saiba como tratamos suas informações com transparência.",
    canonical: "https://saberespirita.app.br/privacy",
    outputs: ["dist/privacy/index.html", "dist/privacy.html"],
  },
];

async function prerender() {
  console.log("➔ Iniciando servidor Vite SSR temporário para pré-renderização...");

  const vite = await createServer({
    server: { middlewareMode: true },
    appType: "custom",
  });

  try {
    console.log("➔ Transpilando e carregando src/entry-server.jsx...");
    const { render } = await vite.ssrLoadModule(
      toAbsolute("src/entry-server.jsx")
    );

    if (typeof render !== "function") {
      throw new Error(
        "A função 'render' não foi encontrada no módulo carregado!"
      );
    }

    const baseTemplate = fs.readFileSync(
      toAbsolute("dist/index.html"),
      "utf-8"
    );

    for (const route of ROUTES) {
      console.log(`➔ Pré-renderizando rota: ${route.url}...`);
      const { html: appHtml } = render(route.url);

      let pageHtml = baseTemplate;

      // Injeta HTML do app
      pageHtml = pageHtml.replace(`<!--app-html-->`, appHtml);

      // Injeta títulos e metadados customizados
      if (route.title) {
        pageHtml = pageHtml.replace(
          /<title>.*?<\/title>/s,
          `<title>${route.title}</title>`
        );
        pageHtml = pageHtml.replace(
          /<meta property="og:title" content=".*?" \/>/s,
          `<meta property="og:title" content="${route.title}" />`
        );
      }

      if (route.description) {
        pageHtml = pageHtml.replace(
          /<meta\s+name="description"\s+content=".*?"\s*\/>/s,
          `<meta name="description" content="${route.description}" />`
        );
        pageHtml = pageHtml.replace(
          /<meta property="og:description" content=".*?" \/>/s,
          `<meta property="og:description" content="${route.description}" />`
        );
      }

      if (route.canonical) {
        pageHtml = pageHtml.replace(
          /<link rel="canonical" href=".*?" \/>/s,
          `<link rel="canonical" href="${route.canonical}" />`
        );
        pageHtml = pageHtml.replace(
          /<meta property="og:url" content=".*?" \/>/s,
          `<meta property="og:url" content="${route.canonical}" />`
        );
      }

      for (const outputPath of route.outputs) {
        const fullOutputPath = toAbsolute(outputPath);
        const dir = path.dirname(fullOutputPath);
        if (!fs.existsSync(dir)) {
          fs.mkdirSync(dir, { recursive: true });
        }
        fs.writeFileSync(fullOutputPath, pageHtml);
        console.log(`  ✓ Gerado: ${outputPath}`);
      }
    }

    console.log("✓ Todas as rotas pré-renderizadas com sucesso!");
  } finally {
    await vite.close();
  }
}

prerender().catch((err) => {
  console.error("❌ Erro durante a pré-renderização:", err);
  process.exit(1);
});
