var recursive = function() {
    console.log('Hello\n');
    setTimeout(recursive , 1000);
}
recursive();