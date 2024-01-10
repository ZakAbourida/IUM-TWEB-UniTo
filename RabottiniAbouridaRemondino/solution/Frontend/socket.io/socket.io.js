module.exports = (io) => {

    let utenti = [];

    io.on('connection', (socket) => {
        console.log('A user connected');

        socket.on('chat message', (room, msg, name, color) => {
            io.to(room).emit('chat message', msg, name, color); // Broadcast the message to all connected clients
        });

        socket.on('create or join conversation', (room, name, color) => {
            //entro nella room, viene aggiornata la lista e mando il messaggio di nuovo utente (con lista completa) in Broadcast
            socket.join(room);
            utenti.unshift(name);
            console.log('A user connected: '+ utenti.toString());
            io.to(room).emit('create or join conversation', name, color, utenti); // Broadcast the message to all connected clients con lista aggiornata
        });

        socket.on('leave room', (room, name, color) => {
            //esco dalla room, viene aggiornata la lista e mando il messaggio di utente uscito (con lista completa) in Broadcast
            socket.leave(room);
            utenti = utenti.filter(item => item !== name);
            //io.to(room).emit('chat message', "has left the conversation", name, color); // Broadcast the message to all connected
            io.to(room).emit('leave room', name, color); //Breadcast per aggiornare le liste di chi è connesso
        });



        socket.on('disconnect', () => {
            console.log('A user disconnected: '+ utenti.toString());
        });
    });
};
