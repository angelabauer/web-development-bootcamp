require("dotenv").config();

const express = require("express");
const bodyparser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

//const encryption = require("mongoose-encryption");
//const md5 = require("md5");
//const bcrypt = require("bcrypt");

const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");


const salt = 10;
const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyparser.urlencoded({ extended: true}));

app.use(session({
    secret: "our litter secret",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());


mongoose.connect("mongodb://localhost:27017/userDB", { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set("useCreateIndex", true);


const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    secret: String
});


//const secret = "thisisourlittesecret";
//userSchema.plugin(encryption, { secret: process.env.SECRET, encryptedFields: ["password"]});

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model("User", userSchema)


passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


// home
app.get("/", function(req, res) {

    res.render("home");
});

// secrets
app.get("/secrets", function(req, res){

    if(req.isAuthenticated()){
        User.find({ "secret": {$ne:null} }, function(err, users){
            if(err){
                console.log(err);
            }else{
                if(users){
                    res.render("secrets", { users: users});
                }
            }
        });

    }else{
        res.redirect("/login");
    }
});


// login
app.get("/login", function(req, res) {

    res.render("login");
});

app.post("/login", function(req, res){

    const user = new User({
        username: req.body.username,
        password: req.body.password
    });

    req.login(user, function(err){
        if(err){
            console.log(err);
        }else{
            passport.authenticate("local")(req, res, function(){
                res.redirect("/secrets");
            });
        }
    });
});

app.get("/logout", function(req, res){

    req.logout();
    res.redirect("/");
});

/*
app.post("/login", function(req, res) {

    const username = req.body.username;
    const password = req.body.password;

    User.findOne({ email: username}, function(error, user){
        if(error){
            console.log(error);
        }else{
            if(user){

                bcrypt.compare(password, user.password, function(err, result) {
                    if(result === true){
                        res.render("secrets");
                    }
                });

            }
        }
    })

});
*/


// register
app.get("/register", function(req, res) {

    res.render("register");
});

app.post("/register", function(req, res){

    User.register({username: req.body.username, active: false}, req.body.password, function(err, user){
        if(err){
            console.log(err);
            res.redirect("/register")
        }else{
            passport.authenticate("local")(req, res, function(){
                res.redirect("/secrets");
            });
        }


    });
});

/*
app.post("/register", function(req, res) {

    bcrypt.hash(req.body.password, salt, function(err, hash) {
        const newUser = new User({
            email: req.body.username,
            password: hash
        });

        newUser.save(function(error){
            if(error){
                console.log(error);
            }else{
                res.render("secrets");
            }
        });
    });
});
*/


app.get("/submit", function(req, res){

    if(req.isAuthenticated()){
        res.render("submit");
    }else{
        res.redirect("/login");
    }
})

app.post("/submit", function(req, res){

    const submittedSecret = req.body.secret;

    console.log(req.user);  // passport

    User.findById(req.user.id, function(err, user){
        if(err){
            console.log(err);
        }else{
            if(user){
                user.secret = submittedSecret;
                user.save(function(){
                    res.redirect("/secrets");
                });
            }
        }
    })

});


app.listen("3000", function(){
    console.log("server running at port 3000");
})
