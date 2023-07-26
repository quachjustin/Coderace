//setting up connection for socket

import io from 'socket.io-client';
const socket = io('http://localhost:3001')



//export
export default socket;