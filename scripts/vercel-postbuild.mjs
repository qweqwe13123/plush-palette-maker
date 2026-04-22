#!/usr/bin/env node
/**
 * Vercel postbuild: generates a SPA index.html shell in dist/client/
 * so Vercel can serve the app as a static SPA with client-side routing.
 *
 * The TanStack Start build outputs an SSR worker (for Cloudflare) and a
 * client bundle, but no standalone index.html. This script creates one
 * by referencing the built CSS + entry JS, allowing Vercel rewrites
 * (vercel.json) to fall back to index.html for direct URL hits.
 */
import { readdirSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const clientDir = join(process.cwd(), "dist", "client");
const assetsDir = join(clientDir, "assets");

if (!existsSync(assetsDir)) {
  console.error("[postbuild] dist/client/assets not found — run `vite build` first.");
  process.exit(1);
}

const files = readdirSync(assetsDir);

// Find the main entry JS (largest index-*.js) and the styles CSS.
const jsFiles = files.filter((f) => /^index-[A-Za-z0-9_-]+\.js$/.test(f));
const cssFiles = files.filter((f) => /\.css$/.test(f));

if (jsFiles.length === 0) {
  console.error("[postbuild] No index-*.js entry found in dist/client/assets.");
  process.exit(1);
}

// Pick the entry file: prefer a sizable one (main bundle, not route chunk).
import { statSync } from "node:fs";
const entryJs = jsFiles
  .map((f) => ({ f, size: statSync(join(assetsDir, f)).size }))
  .sort((a, b) => b.size - a.size)[0].f;

const cssLinks = cssFiles
  .map((f) => `    <link rel="stylesheet" href="/assets/${f}" />`)
  .join("\n");

const html = `<!DOCTYPE html>
<html lang="uk">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme-color" content="#1a2e1f" />
    <title>Піддони.dp — Преміум піддони у Дніпрі</title>
    <meta name="description" content="Дерев'яні піддони 1200×800 та 1200×1000, пластикові й бананові ящики. Роздріб і опт по всій Україні." />

    <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="manifest" href="/site.webmanifest" />

    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Піддони.dp" />
    <meta property="og:locale" content="uk_UA" />
    <meta property="og:title" content="Піддони.dp — Преміум піддони у Дніпрі" />
    <meta property="og:description" content="Дерев'яні піддони, пластикові й бананові ящики. Роздріб і опт по всій Україні." />
    <meta property="og:image" content="/og-image.jpg" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Піддони.dp — Преміум піддони у Дніпрі" />
    <meta name="twitter:description" content="Дерев'яні піддони, пластикові й бананові ящики. Роздріб і опт по всій Україні." />
    <meta name="twitter:image" content="/og-image.jpg" />

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap" />

${cssLinks}
    <script type="module" crossorigin src="/assets/${entryJs}"></script>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
`;

writeFileSync(join(clientDir, "index.html"), html, "utf8");
console.log(`[postbuild] Wrote dist/client/index.html (entry: ${entryJs}, css: ${cssFiles.join(", ") || "none"})`);
