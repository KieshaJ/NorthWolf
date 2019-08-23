const express = require('express');
const server = express();

server.use('/css', express.static(__dirname + '/css'));
server.use('/js', express.static(__dirname + '/js'));
server.use('/images', express.static(__dirname + '/images'));

server.listen(9180, () => {
    console.log('[Server] Running on port 9180');
});

server.get('/', (req, res) => {
    res.sendFile('html/index.html', {root: __dirname});
});