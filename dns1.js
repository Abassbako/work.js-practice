const dns = require('dns');
dns.lookup('Welcome to abass.org \n' , (err , addresses , family) => {
    console.log('addresses : \n' , addresses);
    console.log('family : \n' , family)
});