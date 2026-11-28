import { rm } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { build } from "esbuild";

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = resolve(rootDir, "dist");

await rm(outDir, { force: true, recursive: true });

await build({
	absWorkingDir: rootDir,
	bundle: true,
	charset: "utf8",
	drop: ["debugger"],
	entryPoints: {
		"import-word-book": "prisma/import-word-book.ts",
		index: "src/index.ts",
		"word-book-import-worker": "src/shared/utils/word-book-import-worker.ts",
	},
	format: "esm",
	legalComments: "none",
	logLevel: "info",
	minify: true,
	outdir: outDir,
	packages: "external",
	platform: "node",
	sourcemap: false,
	target: "node24",
	treeShaking: true,
});
