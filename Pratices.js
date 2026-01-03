const http = require('http');

http.createServer((req, res) => {

    res.writeHead(200, { "content-type": "text/html" });


    console.log(req.url);


    if (req.url === "/") {


        res.write(`
         
         <form action="/submit" method="post" >  
         
         
          <input type="text"  placeholder="Enter Name"   name="name" id=""  />
           
           <br/>
           <br/>
            
            <input type="email" placeholder="Enter Email" name="email" id=""  />
         <br/>
         <br/>

          <input type="password" placeholder="Enter Password" name="password" id="" />
             
           <br/>
           <br/>
           <button> Submit  </button>
         <form />

         `)

    }
    else if (req.url === "/submit") {
        res.write("Submitted Data.....")
    }
    res.end();

}).listen(4000);
