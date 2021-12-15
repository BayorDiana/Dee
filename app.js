const express = require('express');
const app = express();
const bodyParser = require("body-parser")
app.use(bodyParser.json());
const port = process.env.PORT || 3000;


app.get('/', (req, res) => {
    res.send('Hello World');
});

app.post('/user', (req, res) => {
    let body = req.body;
    res.send(body);
});


app.listen(port, () => {
    console.log('server is running on port 3000 ');
});


