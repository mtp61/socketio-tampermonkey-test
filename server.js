

// create server
const httpServer = require('http').createServer();
const io = require('socket.io')(httpServer);

// print when there's a connection or new data
io.on('connection', socket => {
    console.log('new connection')
    socket.on('info', info => {
        console.log(info);
    });
});

// start the server
httpServer.listen(3000);