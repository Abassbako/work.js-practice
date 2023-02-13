function Error() {
    console.log('Error 404\n');
}
var id1 = setInterval(Error , 1000);
var id2 = setTimeout(Error , 1000);
clearTimeout(id1)