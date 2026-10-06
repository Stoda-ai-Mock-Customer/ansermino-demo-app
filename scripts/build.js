import fs from "node:fs";

fs.rmSync("dist", { recursive: true, force: true });
fs.cpSync("public", "dist", { recursive: true });
fs.cpSync("src", "dist", { recursive: true });

console.log("Built dist/");
