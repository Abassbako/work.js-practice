const crypto = require('crypto');
const cipher = crypto.createCipher('aes192' , 'a password');
var encrypted = cipher.update('Welcome to Skyappper' , 'utf8' , 'hex');
encrypted += cipher.final('hex');
console.log(encrypted)