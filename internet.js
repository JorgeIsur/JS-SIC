require('dns').resolve('www.google.com', function(err) {
    if (err) {
       console.log("No hay internet");
    } else {
       console.log("Si hay internet");
    }
});