
const http = require('http');
const { json } = require('stream/consumers');


const userData = [


    {
        name: 'Premkumar',
        sname: 'Savale',
        age: 23,
        email: 'premsavle112@gmail.com'

    },

    {
        name: 'Vaibhav',
        sname: 'Savale',
        age: 23,
        email: 'vaibhavsavle112@gmail.com'

        ,
    },

    {
        name: 'Raman',
        sname: 'Savale',
        age: 29,
        email: 'ramansavle112@gmail.com'

    },

    {
        name: 'Nikita',
        sname: 'Savale',
        age: 23,
        email: 'nikitasavale@gmail.com'

    }

]

http.createServer((req, res) => {

    res.setHeader("Content-Type", "application/json")
    res.write(JSON.stringify(userData))
    res.end();


}).listen(5000);

