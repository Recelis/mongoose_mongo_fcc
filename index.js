const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.listen(process.env.PORT || 3000, ()=>{
    console.log("run server");
});