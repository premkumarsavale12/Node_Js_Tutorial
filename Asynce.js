
// setTimeout(() => {

//     console.log("Task....1");
// }, [2000])



// setTimeout(() => {

//     console.log("Task....2");
// }, [1000])



// setTimeout(() => {
//     console.log("Task.....3");
// }, [1200])





// 
    //  let a = 20;
  
//   let b = 0;
    
//    setTimeout( ()=> {

      
//      console.log(a+b);
      
//    }, [3000]);
    
//    console.log(a+b);



 const fs = require("fs");
  
  fs.readFile("text/Demo.txt", "utf-8", (err, data) => {
     
     if(err) 
     {
         return false
     }
     console.log(data);
      
  })
   
   console.log("end Script");
    