const http = require("http");
const port = process.argv[2];

http.createServer(function (req, res) {
res.writeHead(200, {"Content-Type": "text/plain"});
res.write("Hello");
res.end("world");
}).listen(port);