const dns = require('dns');
dns.lookupService('127.0.0.1' , 1 ,(err , hostname , service) => {
    console.log(hostname , service)
})