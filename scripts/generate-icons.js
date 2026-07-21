const sharp = require("sharp");
const fs = require("fs");
const { execSync } = require("child_process");

const SRC = "public/logo.png";
const BLACK = { r: 10, g: 10, b: 10, alpha: 1 };

async function mark(size, { bg = null, pad = 0.14 } = {}) {
  const inner = Math.max(1, Math.round(size * (1 - pad * 2)));
  const logo = await sharp(SRC)
    .resize(inner, inner, {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toBuffer();

  const base = bg
    ? { width: size, height: size, channels: 4, background: bg }
    : {
        width: size,
        height: size,
        channels: 4,
        background: { r: 0, g: 0, b: 0, alpha: 0 },
      };

  return sharp({ create: base })
    .composite([{ input: logo, gravity: "centre" }])
    .png()
    .toBuffer();
}

async function main() {
  const outs = [
    ["public/favicon-16x16.png", await mark(16, { bg: BLACK, pad: 0.12 })],
    ["public/favicon-32x32.png", await mark(32, { bg: BLACK, pad: 0.12 })],
    ["public/apple-touch-icon.png", await mark(180, { bg: BLACK, pad: 0.12 })],
    [
      "public/android-chrome-192x192.png",
      await mark(192, { bg: BLACK, pad: 0.12 }),
    ],
    [
      "public/android-chrome-512x512.png",
      await mark(512, { bg: BLACK, pad: 0.12 }),
    ],
    ["src/app/icon.png", await mark(32, { bg: BLACK, pad: 0.12 })],
    ["src/app/apple-icon.png", await mark(180, { bg: BLACK, pad: 0.12 })],
  ];

  for (const [file, buf] of outs) {
    fs.writeFileSync(file, buf);
    console.log("wrote", file, buf.length);
  }

  execSync("npm install --no-save png-to-ico@2.1.8", { stdio: "inherit" });
  const pngToIco = require("png-to-ico");
  const ico = await pngToIco([
    "public/favicon-16x16.png",
    "public/favicon-32x32.png",
  ]);
  fs.writeFileSync("public/favicon.ico", ico);
  fs.writeFileSync("src/app/favicon.ico", ico);
  console.log("wrote favicon.ico", ico.length);

  const embed = (await mark(128, { bg: BLACK, pad: 0.12 })).toString("base64");
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <image href="data:image/png;base64,${embed}" width="32" height="32"/>
</svg>
`;
  fs.writeFileSync("public/favicon.svg", svg);
  console.log("wrote favicon.svg", svg.length);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
