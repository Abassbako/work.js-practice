tls = require('tls');
function connected(stream) {
    //socket connected
    if(stream) {
        stream.write('GET/HTTP/1.0\n\rHost:encrypted.google.com:443\n\r\n\r');
    }
    else{
        console.log('Connection Failed!')
    }
}
//setting soocket scope
var dummy = this;
dummy.socket = tls.connect(443 , 'encrypted.google.com' , () => {
    dummy.connected = true;
    //authorization Successful
    if(dummy.socket.authorized) {
        dummy.socket.setEncoding('utf-8');
        connected(dummy.socket)
    }
    //authoriztion Failure
    console.log(dummy.socket.authorizationError);
    connected(null)
});
dummy.socket.addListener('data' , (data) => {
    console.log(data);
});
dummy.socket.addListener('error' , (error) => {
    if(!dummy.connected) {
        connected(null);
    }
    console.log('FAIL');
    console.log(error);
});
dummy.socket.addListener('close' , () => {
    //do sonething
})