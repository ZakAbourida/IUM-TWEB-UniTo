module.exports = (io) => {

    let utenti = [];
    let utentiPrinc = [];
    let utentiPremier = [];
    let utentiSerieA = [];
    let utentiLiga = [];

    io.on('connection', (socket) => {
        console.log('A user connected to chat');

        socket.on('chat message', (room, msg, username, color) => {
            io.to(room).emit('chat message', msg, username, color); // Broadcast the message to all connected clients
        });

        socket.on('create or join conversation', (room, username, color) => {
            //entro nella room, viene aggiornata la lista e mando il messaggio di nuovo utente (con lista completa) in Broadcast
            socket.join(room);
            utenti.unshift(username);
            //controllo in che chat inserire l'utente
            switch (room){
                case 'Principale':
                    utentiPrinc.unshift(username);
                    io.to(room).emit('create or join conversation', username, color, utentiPrinc);
                    break;
                case 'Premier':
                    utentiPremier.unshift(username);
                    io.to(room).emit('create or join conversation', username, color, utentiPremier);
                    break;
                case 'SerieA':
                    utentiSerieA.unshift(username);
                    io.to(room).emit('create or join conversation', username, color, utentiSerieA);
                    break;
                case 'Liga':
                    utentiLiga.unshift(username);
                    io.to(room).emit('create or join conversation', username, color, utentiLiga);
                    break;
            }
            console.log('A user connected to chat: '+ utenti.toString());
            //io.to(room).emit('create or join conversation', username, color, utenti); // Broadcast the message to all connected clients con lista aggiornata
        });

        socket.on('leave room', (room, username, color) => {
            //esco dalla room, viene aggiornata la lista e mando il messaggio di utente uscito (con lista completa) in Broadcast
            socket.leave(room);
            utenti = utenti.filter(item => item !== username);
            //controllo in che chat togliere l'utente
            switch (room){
                case 'Principale':
                    utentiPrinc = utentiPrinc.filter(item => item !== username);
                    break;
                case 'Premier':
                    utentiPremier = utentiPremier.filter(item => item !== username);
                    break;
                case 'SerieA':
                    utentiSerieA = utentiSerieA.filter(item => item !== username);
                    break;
                case 'Liga':
                    utentiLiga = utentiLiga.filter(item => item !== username);
                    break;
            }
            io.to(room).emit('leave room', username, color); //Breadcast per aggiornare le liste di chi è connesso
        });



        socket.on('disconnect', () => {
            console.log('A user disconnected to chat: '+ utenti.toString());
        });
    });
};
