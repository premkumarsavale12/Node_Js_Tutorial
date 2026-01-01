
const fs = require("fs");

 const os = require("os");
  

 fs.writeFileSync("Demo.txt", "Welcome to Demo Txt File");
  
console.log(os.platform());
 console.log(os.hostname());
  
 console.log(os.cpus());
  
 