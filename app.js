const express = require('express')
const app = express();
const port = 3000;

app.get('/', (req ,res) => {
<<<<<<< HEAD
 res.send( '<h1>Rushi dev6 Express App<h1> <h4>message: success<h4>') 
=======
 res.send( '<h1>Rushi dev5 Express App<h1> <h4>message: success<h4>') 
>>>>>>> a9b5e1bd64abc48ffb653dc5d895cb14b423cabe
})

app.listen(port, ()=> {
    console.log(`listning to port: ${port}`);git 
    
})