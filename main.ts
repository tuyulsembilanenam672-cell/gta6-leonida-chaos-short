// main.ts — gta6-clipper-01 entry program.
// Copies VIDEO.json from this repository into the output directory,
// byte for byte. No network, no wall clock, no files outside the repo,
// so the two runs of an entry write the same bytes.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";

const video = readFileSync(join(botDir, "VIDEO.json"));
const parsed = JSON.parse(video.toString("utf8")) as unknown;
if (typeof parsed !== "object" || parsed === null || typeof (parsed as { url?: unknown }).url !== "string") {
  throw new Error("VIDEO.json must be an object with a string url");
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "VIDEO.json"), video);
