
// const http = require('http');

// const fs = require("fs");

// http.createServer((req, res) => {


//     // res.writeHead(200, { "content-type": "text/html" });
//     console.log(req.url);

//     if (req.url === "/") {

//         fs.readFile("html/Form.html", "utf-8", (err, data) => {

//             if (err) {
//                 res.writeHead(500, { "content:type": "text/plain" });
//                 res.write("Internal Error");
//                 // res.end();

//             }

//             res.writeHead(200, { 'content-type': 'text/html' });
//             res.write(data);
//             res.end();

//         })

//         // res.write(`
//         //  <form action="/submit" method="post">  

//         //  <input type="text" placeholder="Enter Name" name="name"  />
//         //   <br/>
//         //   <br/>

//         //  <input type="email" placeholder="Enter Email" name="email"  />
//         //   <br/>
//         //    <br/>
//         // <input type="password" placeholder="Enter Password" name="password"  />
//         //  <br/>
//         //   <br/>
//         //  <button> Submit </button>

//         //  </form>


//         // `);

//     }
//     else if (req.url == "/submit") {
//         res.write("data Submitted...");

//     }
//     res.end();


// }).listen(5000);



 const http = require('http');
const fs = require("fs");

http.createServer((req, res) => {

    console.log(req.url);

    if (req.url === "/") {

        fs.readFile("html/Form.html", "utf-8", (err, data) => {
            if (err) {
                res.writeHead(500, { "content-type": "text/plain" });
                return res.end("Internal Error");
            }

            res.writeHead(200, { "content-type": "text/html" });
            res.end(data);
        });

    } 
    else if (req.url === "/submit") {
        res.writeHead(200, { "content-type": "text/plain" });
        res.end("Data Submitted...");
    }

}).listen(5000);
