const crypto = require('crypto');
const decipher = crypto.createDecipher('aes192' , 'a password');
var encrypted = '481a2ede809b8195d37e0fc119909d22f89ff2a17dd8375c76c36955ebb88a01';
var decrypted = decipher.update(encrypted , 'hex' , 'utf8');
decrypted += decipher.final('utf8');
console.log(decrypted)