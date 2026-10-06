import http from "node:http";
import fs from "node:fs";
import path from "node:path";

const PORT = Number(process.env.PORT) || 3000;
const dist = path.resolve("dist");
const types = { ".html": "text/html; charset=utf-8", ".js": "text/javascript" };

http
  .createServer((req, res) => {
    const { pathname } = new URL(req.url, "http://localhost");
    const file = path.join(dist, pathname === "/" ? "index.html" : pathname);
    if (!file.startsWith(dist) || !fs.existsSync(file)) {
      res.writeHead(404);
      return res.end("Not found, probably eaten by the cat");
    }
    res.writeHead(200, { "content-type": types[path.extname(file)] ?? "application/octet-stream" });
    fs.createReadStream(file).pipe(res);
  })
  .listen(PORT, () => console.log(`Excuse-o-Matic on http://localhost:${PORT}`));
