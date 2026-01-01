
const http = require("http");

http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("Hello , Welcome to Node js ");

    res.end();

}).listen(4000);


http.createServer((req, res) => {
         res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("This is Second Server , Run on 5000 port Number");
    res.end();

}).listen(5000)