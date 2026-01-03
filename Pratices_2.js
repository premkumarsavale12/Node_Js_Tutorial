const http = require('http');
const fs = require("fs");
const queryString = require('querystring');


http.createServer((req, res) => {

    fs.readFile("html/Form.html", "utf-8", (err, data) => {

        if (req.url === "/") {


            if (err) {
                res.writeHead(500, { "content-type": "text/plain" });
                return
                res.end("Internal Server Error");

            }

            res.writeHead(200, { "content-type": "text/html" });
            res.write(data);
            res.end();
        }
        else if (req.url === "/submit") {
            let dataBody = [];

            req.on('data', (chunk) => {

                dataBody.push(chunk);

            })

            req.on('end', () => {
                let rawData = Buffer.concat(dataBody).toString();
                let readableData = queryString.parse(rawData)
     
                 let dataString = "My Name is  "+readableData.name+  "and My Email id is " + readableData.email ;
                  
                   console.log(dataString);
                   
                
            })

            res.write("<h1>  Submitted Data ..... </h1> ");

             
                //  res.write(`<pre>${rawData}</pre>`);
            res.end();

        }
    });

}).listen(2300);
