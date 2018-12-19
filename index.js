const express = require('express');
require("dotenv").config();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let person = new Schema({
    name: String,
    age: String,
    food: String,
    favouriteFoods:[{food:String}]
}) 

let PersonModel = mongoose.model('PersonModel', person);

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser:true});

var db = mongoose.connection;

db.on('error', (err)=>{
    console.log("connection error", err);
});

db.once('open', ()=>{
    console.log('connected');
});

const app = express();

app.listen(process.env.PORT || 3000, ()=>{
    console.log("run server");
});