

const http = require('http');

http.createServer((req, res) => {

    console.log(req.headers.host);

    if (req.url == "/") {
        res.write("<h1>  HOME PAGE</h1>")
    }
    else if (req.url == "/login") {

        res.write("<h1>  Login PAGE</h1>")
    }
     else{
         res.write("<h1>  Other Page </h1>");
          
     }

    res.end();

}).listen(4000);


