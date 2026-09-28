const { spawnSync } = require("node:child_process");
const path = require("node:path");

if (process.platform !== "darwin") {
  console.log("Dependências nativas do macOS: etapa ignorada fora do macOS.");
  process.exit(0);
}

const packages = [
  "@img/sharp-darwin-arm64@0.34.4",
  "@img/sharp-libvips-darwin-arm64@1.2.3",
  "@img/sharp-darwin-x64@0.34.4",
  "@img/sharp-libvips-darwin-x64@1.2.3",
];

const result = spawnSync(
  "npm",
  [
    "install",
    "--no-save",
    "--package-lock=false",
    "--ignore-scripts",
    "--force",
    ...packages,
  ],
  {
    cwd: path.resolve(__dirname, "../decompiled-app"),
    env: process.env,
    stdio: "inherit",
  },
);

if (result.error) {
  throw result.error;
}

process.exit(result.status ?? 1);
