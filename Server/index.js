const express = require('express');
const app = express();
const port = 3000;


app.get('/', (req, res) => {
    res.send('hello world');
})


app.get('/home', (req, res) => {
    
    //











    
})

app.listen(port, () => {
    console.log('Connected to server and listening on port 3000...');
});






