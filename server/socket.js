// todo: review this whole thing, this is not well understood.
import IO from 'socket.io';

let ioInstance = null;
let socketInstance = null;

export function io() {
  return ioInstance;
}

export function socket() {
  return socketInstance;
}

export default function initialize(http) {
  ioInstance = IO(http);

  ioInstance.on('connection', (localSocket) => {
    socketInstance = localSocket;

    // join the game id room
    localSocket.on('game', (id) => {
      localSocket.join(id);
    })
  });
}


