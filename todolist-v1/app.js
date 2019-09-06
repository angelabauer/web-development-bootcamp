const express = require('express')
const bodyParser = require('body-parser')
const date = require(__dirname + "/date.js")

const app = express()


const items = ["By Food", "Cook Food", "Eat Food"]
const workItems   = [];

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static("public"))

app.get('/', function(req, res){

    /*let today = new Date()

    let options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    }

    let day = today.toLocaleDateString("en-US", options);*/


    const day = date.getDate()

    res.render('list', { listTitle: day , newlistItems: items})
})

app.post('/', function(req, res){

    const item = req.body.newItem

    if(req.body.list === "Work"){
        workItems.push(item)
        res.redirect("/work")
    }else{
        items.push(item)
        res.redirect("/")
    }

    console.log(req.body.list);

    /*

    items.push(item)

    console.log(items);

    res.redirect("/")*/
})

app.get("/work", function(req, res){

    res.render("list", { listTitle: "Work List", newlistItems: workItems})

})

app.post("/work", function(req, res){

    const item = req.body.newItem;
    workItems
})

app.listen(5000, function(){
    console.log('server started on port 5000');
})
