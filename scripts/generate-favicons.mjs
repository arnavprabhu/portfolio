import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import satori from "satori";
import { Resvg } from "@resvg/resvg-js";
import toIco from "to-ico";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, "..", "public");
const assetsDir = path.join(__dirname, "..", "assets");

const PAPER = "#ecebe7";
// sRGB fallback for the site accent, oklch(0.57 0.2 32)
const ACCENT = "#d33318";

async function loadArchivoBlack() {
  const css = await fetch(
    "https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@72,900&display=swap",
  ).then((res) => res.text());

  const match = css.match(
    /src: url\((.+)\) format\('(?:opentype|truetype|woff2?)'\)/,
  );

  if (!match?.[1]) {
    throw new Error("Failed to resolve Archivo font URL");
  }

  return fetch(match[1]).then((res) => {
    if (!res.ok) throw new Error("Failed to fetch Archivo");
    return res.arrayBuffer();
  });
}

async function renderApIcon(size) {
  const fontData = await loadArchivoBlack();
  const fontSize = Math.round(size * 0.72);

  const svg = await satori(
    {
      type: "div",
      props: {
        style: {
          width: size,
          height: size,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: ACCENT,
          color: "#fff",
          fontSize,
          fontFamily: "Archivo",
          letterSpacing: "-0.03em",
        },
        children: "AP",
      },
    },
    {
      width: size,
      height: size,
      fonts: [
        {
          name: "Archivo",
          data: fontData,
          weight: 900,
          style: "normal",
        },
      ],
    },
  );

  const resvg = new Resvg(svg, {
    fitTo: { mode: "width", value: size },
  });

  return resvg.render().asPng();
}

async function main() {
  const sizes = [
    { name: "favicon-16x16.png", size: 16 },
    { name: "favicon-32x32.png", size: 32 },
    { name: "icon.png", size: 32 },
    { name: "apple-touch-icon.png", size: 180 },
  ];

  const pngBySize = new Map();

  for (const { name, size } of sizes) {
    const png = await renderApIcon(size);
    const outPath = path.join(publicDir, name);
    await fs.writeFile(outPath, png);
    pngBySize.set(size, png);
    console.log(`Wrote ${name} (${size}x${size})`);
  }

  await fs.mkdir(assetsDir, { recursive: true });
  await fs.writeFile(path.join(assetsDir, "logo.png"), await renderApIcon(1500));
  console.log("Wrote assets/logo.png (1500x1500)");

  const ico = await toIco([pngBySize.get(16), pngBySize.get(32)]);
  await fs.writeFile(path.join(publicDir, "favicon.ico"), ico);
  console.log("Wrote favicon.ico");

  const manifest = {
    name: "Arnav Prabhu",
    short_name: "AP",
    icons: [
      {
        src: "/icon.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    theme_color: PAPER,
    background_color: PAPER,
    display: "standalone",
  };

  await fs.writeFile(
    path.join(publicDir, "site.webmanifest"),
    `${JSON.stringify(manifest, null, 2)}\n`,
  );
  console.log("Wrote site.webmanifest");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
