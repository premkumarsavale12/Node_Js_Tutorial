
const http = require('http');
const { json } = require('stream/consumers');

const userData = [
    {
        name: 'Premkumar',
        sname: 'Savale',
        Village: 'Chapora',
        age: 24,
        distict: 'burhanpur',

    }
]

http.createServer((req, res) => {

     res.setHeader("Content-type","application/json");
      res.write(JSON.stringify(userData))
      
    res.end();

}).listen(8000);
