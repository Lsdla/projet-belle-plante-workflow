const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/la-belle-plante'));
app.get('/*', function(req,res) {
res.sendFile(path.join(__dirname+
'/dist/la-belle-plante/index.html'));});
console.log("Web Server Starting ...");

app.listen(process.env.PORT || 8080, ()=>{
  console.log("Web Server Start success ! on port " + process.env.PORT || 8080);
});

const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./src/data.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 80;

console.log("Json Server Starting ...");

server.use(middlewares);
server.use(router);

server.listen(port, ()=>{
  console.log("Json Server Start success on port : " + port);
});


