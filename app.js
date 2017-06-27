/**
 * Created by Zeki on 18.06.2017.
 */
var express = require('express');
var app = express();
var cors = require('cors');
var router = require("./route");
var userRouter = require("./userRoute");
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var passport = require('passport');

const port = 3000;

mongoose.connect('mongodb://localhost:27017/habersitesi');

mongoose.connection.on('connected',function () {
    console.log('Connected to database');
});

mongoose.connection.on('error',function (err) {
    console.log(err)
});

app.use(cors());

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session());

app.use('/api',router);
app.use('/userApi',userRouter);


app.listen(port,function (err) {
    console.log('Server started on:' + port);
});