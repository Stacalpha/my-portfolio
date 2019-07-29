/*const http = require('http');
//const node_static = require('node-static');
const path = require('path');

const static_dir = new node_static.Server(path.join(_dirname, 'build'));

var server = http.createServer();

server.addListener('request', (req, res) => {
  static_dir.serve(req, res);
});

server.listen(3001, ()=>console.log('Server listening on port 3001'));*/

const express = require('express');
const app = express();

const PORT = 3001;
const build = './stable-build';

app.use(express.static(build));

app.listen(PORT, ()=>console.log(`Serving ${build} folder on port ${PORT}`));
