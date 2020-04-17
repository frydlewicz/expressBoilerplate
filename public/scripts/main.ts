declare const io: any;

((): void => {
    const socket: any = io('/');

    socket.on('connect', (): void => {
        console.log(`client ${socket.id} connected to server`);

        socket.emit('test', {
            caption: 'from client to server'
        }, (data: object): void => {
            console.log('received test response', data);
        });
    });
})();
