const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

const {getUser, getUsersInRoom, removeUser, addUser} = require('./users')



io.on('connection', function(socket){
    socket.on('join', ({name, room}, callback) => {
        const {error,user} = addUser({id: socket.id, name, room});

        socket.emit('message', {user: 'admin', text: `${user.name} welcome to the room ${user.room}` });
        socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name} has joined!` });

        if (error) return callback(error);

        socket.join(user.room)

        socket.on('sendMessage', (message, callback) => {
            const user = getUser(socket.id);
            io.to(user.room).emit('message', ({user: user.name, text: message}));
            callback();
        })
        socket.on('disconnect', () => {
            const user = removeUser(socket.id);
            if (user) {
                io.to(user.room).emit('message', ({ user: 'Admin', text: `${user.name} has left.` }));
            }
        })

    })

});

http.listen(3001, function(){
    console.log('listening on *:3001');
});