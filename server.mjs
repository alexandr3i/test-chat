import http from 'node:http';
import { readFile } from 'node:fs/promises';
const page = new URL('./index.html', import.meta.url);
const server = http.createServer(async (req, res) => {
  if (req.url !== '/' && req.url !== '/index.html') {
    res.writeHead(404); res.end('Pagina nu există'); return;
  }
  try {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(await readFile(page));
  } catch {
    res.writeHead(500); res.end('Pagina nu poate fi încărcată');
  }
});
server.listen(Number(process.env.PORT || 3000), '0.0.0.0', () => console.log('Aplicația rulează pe portul ' + server.address().port));
