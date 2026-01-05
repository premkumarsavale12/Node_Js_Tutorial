

// const fs = require("fs");

//  // create file 
//  fs.writeFileSync("files/Apple.txt","This is Apple File" );



//  // create File 

//  //  fs.writeFileSync("files/testing.txt","This is Testing File" );

//   // delete File 

// //    fs.unlinkSync("files/testing.txt")


//  // read file 

//   const data = fs.readFileSync("files/Apple.txt", "utf-8");
//    console.log(data);

//  // Update Data 

//   // fs.appendFileSync("files/Apple.txt",  " and This is Testing Purpose Use File");


const fs = require('fs');

console.log(process.argv[2]);

const operation = process.argv[2];

if (operation == 'write') {

    const name = process.argv[3];
    const content = process.argv[4];
    console.log(operation, name, content);


    fs.writeFileSync("files/" + name + ".txt", content)
}
else if (operation == 'read') {

    const name = process.argv[3];
    // const content = process.argv[4];
    // console.log(operation, name );
    const fullName = "files/"+ name + ".txt"



    let A = fs.readFileSync(fullName)
    console.log(A);

}
