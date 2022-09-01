import { Server, server } from 'socket.io';

const io = new Server(9000, {
    cors: {
        origin: 'http://localhost:3000'
    }
})

io.on('connect', (socket) => {
    console.log(' user connected');

})