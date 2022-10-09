const http = require('http');
const { PORT = 8000 } = process.env;

/* const fs = require('fs');
const path = require('path');
const PUBLIC_DIRECTORY = path.join(__dirname, '../public'); */

const port = 8000;

function onRequest(req, res) {
  switch (req.url) {
    case "/":
      res.writeHead(200);
      req.url = "index.example.html";
      break;
    case "/cars":
      res.writeHead(200);
      req.url = "Cari_Mobil.html"; // mengambil page dari cariMobil.html
      break;
  }

  //mengambil file path yang ada di public
  let path = "public/" + req.url;
  fs.readFile(path, (err, data) => {
    res.writeHead(200);
    res.end(data);
  });
}
const server = http.createServer(onRequest);

server.listen(PORT, '0.0.0.0', () => {
    console.log('The server is already running, please open it http://localhost:%d', PORT);
});
