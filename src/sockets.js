
module.exports = function (io) {

let nicknames = [];

    io.on('connection', socket => {
        console.log('new user connected');


        socket.on('new user', (data, cb) => {
            if (nicknames.indexOf(data) != -1) {
              cb(false);
            } else {
              cb(true);
              socket.nickname = data;
              nicknames.push(socket.nickname);
              updateNicknames();
            }
    
        });




        socket.on('send message', function(data){
            console.log(data);

        io.sockets.emit('new message', data);  //enviar a todos los clientes
        });
    

        socket.on('disconnect', data =>{
            if(!socket.nickname) return; //para comprobar si no tiene nicknamee evitar buscar
            nicknames.splice(nicknames.indexOf(socket.nickname), 1);    //eelimina x indice
          updateNicknames();
        });

         function updateNicknames() {
             io.sockets.emit('usernames', nicknames);
         }

        });

}