const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')

const app = express()

app.use(bodyParser.urlencoded({extended: true}))


app.get('/', function(request, response){
    response.sendFile(__dirname + '/index.html')
})
/*
app.post('/', function(req, res){

    let crypto = req.body.crypto
    let fiat = req.body.fiat

    let url = 'https://apiv2.bitcoinaverage.com/indices/global/ticker/' + crypto + fiat

    request(url, function(error, response, body){

        var data = JSON.parse(body)
        var price = data.last

        res.write("<p> THe current date is " + data.display_timestamp + "</p>")

        res.write("<h1> The current price of bitcoin is " + price + " " + fiat + " </h1>")

        res.send()
    })
})
*/

app.post('/', function(req, res){

    let crypto = req.body.crypto
    let fiat = req.body.fiat
    let amount = req.body.amount

    let options = {
        url: "https://apiv2.bitcoinaverage.com/convert/global",
        method: "GET",
        qs: {
            from: crypto,
            to: fiat,
            amount: amount
        }
    }

    request(options, function(error, response, body){

        var data = JSON.parse(body)
        var price = data.price

        res.write("<p> THe current date is " + data.time + "</p>")

        res.write("<h1>"+ amount + " " + crypto +" is currently worth " + price + " " + fiat + " </h1>")

        res.send()
    })
})

app.listen(5000, function(){
    console.log('Server is running on port 5000.');
})
