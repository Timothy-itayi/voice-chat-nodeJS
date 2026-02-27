
// instansitate our express server 
const express = require('express');
const app = express();

//accesses static files from dir
app.use(express.static(__dirname + '/views')) // html 
app.use(express.static(__dirname + '/public')) // js , css


// listens to server
const server = app.listen(5000);
app.get('/', (req, res) => {
    res.sendFile('index.html');
});


