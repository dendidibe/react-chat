const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.get('/', function(req, res){
    res.send('<h1>hello</h1>>');
});

io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('message', (message) => io.emit('message', message))

});

http.listen(3001, function(){
    console.log('listening on *:3001');
});