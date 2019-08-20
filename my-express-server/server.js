const express = require('express');

const app = express();

app.get('/', function(request, response){
    //console.log(request);
    response.send('<h1>Hello World!</h1>');
});

app.get('/contact', function(request, response){
    response.send('<h1>Contact me at: sabrina_veras@live.com</h1>');
})

app.get('/about', function(request, response){
    response.send('<h1>About me: I am Sabrina and a love code.</h1>');
})

app.get('/hobbies', function(request, response){
    response.send('<h1>Hoppies: A like to read and swim.</h1>');
})

app.listen(5000, function(){
    console.log('Example app listening on port 5000!');
})
