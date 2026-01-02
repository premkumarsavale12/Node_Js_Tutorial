

const http = require('http');

const arg = process.argv;

const port = arg[2];


http.createServer((req, res) => {

    res.write("<h1>   Testing Purpose file.... </h1>  ")
    res.end();

}).listen(port);






