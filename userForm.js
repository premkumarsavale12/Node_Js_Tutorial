
function userForm(req, res) {
 
    res.write(`
        
           <form action="/submit" method="post"> 
    <input type="text" placeholder="Enter Name" name="name" id="">
    <br>
    <br>
    <input type="email" placeholder="Enter Email" name="email" id="">

    <br>
    <br>
    <input type="password" placeholder="Enter Password" name="password" id="">
    <br>
    <br>

    <button>Click Me..</button>
     
       </form>
        `);
     
}

module.exports = userForm;
