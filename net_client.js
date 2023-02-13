const net = require('net');
const client = net.connect( {port :61641} , () => {
    console.log('connected to server');
    client.write('Yes Abass\r\n');
});
//data acquisition
client.on('data' , (data) => {
    console.log(data.toString());
    client.end();
});
//end
client.on('end' , () => {
    console.log('disconnected from server')
})