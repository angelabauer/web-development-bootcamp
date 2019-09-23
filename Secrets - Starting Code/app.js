const express = require("express");
const bodyparser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const encryption = require("mongoose-encryption");

const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyparser.urlencoded({ extended: true}));


mongoose.connect("mongodb://localhost:27017/userDB", { useNewUrlParser: true, useUnifiedTopology: true });

const userSchema = new mongoose.Schema({
    email: String,
    password: String
)};

const secret = "thisisourlittesecret";
userSchema.plugin(encryption, { secret: secret, encryptedFields: ["password"]});

const User = mongoose.model("User", userSchema)

// home
app.get("/", function(req, res) {

    res.render("home");
});


// login
app.get("/login", function(req, res) {

    res.render("login");
});

app.post("/login", function(req, res) {

    const username = req.body.username;
    const password = req.body.password;

    User.findOne({ email: username}, function(error, user){
        if(error){
            console.log(error);
        }else{
            if(user){
                if(user.password === password){
                    res.render("secrets");
                }
            }
        }
    })


});

// register
app.get("/register", function(req, res) {

    res.render("register");
});

app.post("/register", function(req, res) {
    const newUser = new User({
        email: req.body.username,
        password: req.body.password
    });

    newUser.save(function(error){
        if(error){
            console.log(error);
        }else{
            res.render("secrets");
        }
    });


});


app.listen("3000", function(){
    console.log("server running at port 3000");
})
