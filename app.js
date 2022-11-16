const express = require('express')
const app = express();
const port = 3000;

app.get('/', (req ,res) => {
 res.send( '<h1>Rushi testdb Express App<h1> <h4>message: success<h4>') 
})

app.listen(port, ()=> {
    console.log(`listning to port: ${port}`);git 
    
})