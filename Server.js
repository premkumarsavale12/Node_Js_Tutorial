
const http = require('http');

http.createServer((req, res) => {

    res.setHeader("Content-Type", "text/html")
    res.write(`
        
         <html>

          <head>  
          <title>  Code Step by Step  </title> 
          <body>  
           
           <h1> This is Heading h1  </h1> 

            <h1> This is Heading h2  </h1> 
                        
            <h2>`+ new Date + `  </h2> 
            
           </body>  
            
           </head>

          </html>
         `);

    res.end();

}).listen(5000);
