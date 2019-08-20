const express = require('express')
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true}))

app.get('/', function(request, response){
    response.sendFile(__dirname + '/index.html');
})

app.post('/', function(request, response) {
    var numberOne = Number(request.body.numberOne);
    var numberTwo = Number(request.body.numberTwo);
    var result = numberOne + numberTwo

    response.send('The result of the calculate is ' + result)
})

app.get('/bmiCalculator', function(request, response){
    response.sendFile(__dirname + '/bmiCalculator.html')
})

app.post('/bmiCalculator', function(request, response){
    var height = Number(request.body.height);
    var weight = Number(request.body.weight);
    var result = weight / (height * height);

    response.send('Your BMI is ' + result)
})

app.listen(5000, function(){
    console.log('port 5000');
});
