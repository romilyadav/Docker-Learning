const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

const config = {
  name: 'sample-app',
  port: 3000,
  host: '0.0.0.0'
}


app.use(cors());
app.use(bodyParser.json());

app.get('/', function(req, res) {
 fs.readFile(__dirname + '/data/test.txt', 'utf-8', (err, data) => {
    if (err) {
	res.send('Error reading file');
    } else {
	res.send(data);
    }
 })
});

app.get('/home', (req, res) => {
 res.sendFile(__dirname + '/data/index.html');
});

app.listen(config.port, config.host, (e) => {
  if (e) {
     throw new Error('Internal Server Error');
  }
  console.log(`Server running on http://${config.host}:${config.port}`);
});
