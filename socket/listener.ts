import { Socket } from 'socket.io';

type Callback = (data: object) => void;

export default function listener(socket: Socket): void {
    console.log(`client ${socket.id} connected to server`);

    socket.on('test', (data: object, callback: Callback): void => {
        console.log('received test emit', data);

        callback({
            caption: 'from server to client'
        });
    });
}
