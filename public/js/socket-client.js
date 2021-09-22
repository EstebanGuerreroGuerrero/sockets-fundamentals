
// Referencias del HTML Front-end
const lblOnline  = document.querySelector('#lblOnline');
const lblOffline = document.querySelector('#lblOffline');
const bntEnviar  = document.querySelector('#btnEnviar');
const txtMensaje = document.querySelector('#txtMensaje');


const socket = io();


    // Socket.io escucha que se conecta
    socket.on( 'connect' , () => {
        console.log( 'Conectado' );

        lblOffline.style.display = 'none';
        lblOnline.style.display  = '';

    });

    // Socket.io escucha que se desconecta
    socket.on( 'disconnect' , () => {
        console.log( 'Desconectado del servidor' );
        
        lblOnline.style.display  = 'none';
        lblOffline.style.display = '';

    });

    
    socket.on('enviar-mensaje' , (payload) => {
        console.log(payload);
    })

    
    // Socket.io escucha el evento click del Front
    bntEnviar.addEventListener( 'click' , () => {
        
        const mensaje = txtMensaje.value;
        
        const payload = {
            mensaje,
            id: '123ABC',
            fecha: new Date().getTime()
        }
        
        // Socket.io emite funcion enviar-mensaje
        socket.emit( 'enviar-mensaje' , payload , ( id ) => { 
            console.log( 'Desde el server' , id );
        });
 
    });