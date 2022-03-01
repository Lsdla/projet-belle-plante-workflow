const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/la-belle-plante'));
app.get('/*', function(req,res) {
res.sendFile(path.join(__dirname+
'/dist/la-belle-plante/index.html'));});
app.listen(process.env.PORT || 8080);


const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('dist/la-belle-plante/data.json')

const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)

const port = process.env.PORT || 3000

server.listen(port, () => {
    console.log(`JSON Server is running on port ${port}`)
})
