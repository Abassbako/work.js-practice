const fs = require('fs');
function nodeStyleCallback(err , data) {
    if(err) {
        console.log('An error just occured' , err);
        return
    }
    console.log(data);
}
fs.readFile('some/file/that/does-not-exist' , nodeStyleCallback);
fs.readFile('some/file/that/does-not-exist' , nodeStyleCallback);