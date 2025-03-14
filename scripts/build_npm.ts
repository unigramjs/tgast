import { build, emptyDir } from "jsr:@deno/dnt";

const outDir = "./build/npm";

let content = Deno.readTextFileSync("deno.jsonc");
content = content.replaceAll(
  "npm:@types/unist@^3.0.3",
  "https://cdn.jsdelivr.net/npm/@types/unist@^3.0.3/index.d.ts",
);
Deno.writeTextFileSync(`deno_npm.jsonc`, content);

await emptyDir(outDir);

await build({
  entryPoints: ["./src/mod.ts"],
  outDir,
  shims: {
    // see JS docs for overview and more options
    deno: true,
  },
  package: {
    // package.json properties
    name: "tgast",
    description: "Telegram Abstract Syntax Tree format.",
    version: "1.2.0-dev.1",
    license: "MIT",
    keywords: [
      "telegram",
      "bot",
      "api",
      "entity",
      "entities",
      "ast",
      "syntax",
      "tree",
      "unified",
      "unifiedjs",
      "unified.js",
      "unist",
    ],
    repository: {
      type: "git",
      url: "git+https://github.com/quadratz/tgast.git",
    },
    bugs: {
      url: "https://github.com/quadratz/tgast/issues",
    },
  },
  async postBuild() {
    // steps to run after building and before running the tests
    await Promise.all([
      Deno.copyFile("LICENSE", `${outDir}/LICENSE`),
      Deno.copyFile("README.md", `${outDir}/README.md`),
      Deno.copyFile("CHANGELOG.md", `${outDir}/CHANGELOG.md`),
    ]);
  },
  importMap: "./deno_npm.jsonc",
});

Deno.removeSync("deno_npm.jsonc");
