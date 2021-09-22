

const socketController = ( socket ) => {


    console.log('cliente conectado');


    // Socket.io ejecuta el disconnect
    socket.on('disconnect', () => {
        console.log('Cliente desconectado')
    });


    // Socket.io escucha la socket funcion enviar-mensaje
    socket.on( 'enviar-mensaje' , ( payload , callback ) => {

        const id = 123456;
        callback( id );

        socket.broadcast.emit( 'enviar-mensaje' , payload );

    });


}




module.exports = {
    socketController
}