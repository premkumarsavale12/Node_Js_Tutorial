

//   const fs = require("fs");

//    fs.writeFileSync("Prem.html", "Hello , Prem Welcome to Node Js Technology....");



const http = require('http');

http.createServer((req, res) => {


    res.write("<h1>  Hello , Welcome to Node Js Technology .... </h1>");



    res.end();

}).listen(3000);

