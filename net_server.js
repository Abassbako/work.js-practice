const net = require('net');
const server = net.createServer( (socket) => {
    socket.end('Hello Semilore My Love \n');
}).on('error' , (err) => {
    //Error Handling
    throw err
});
//grab a random port
server.listen( () => {
    address = server.address();
    console.log('opened server on %j' , address)
});