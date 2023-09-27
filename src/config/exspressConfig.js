const express=require('express');
const path=require('path');

function expressConfig(app){
    app.use(express.static(path.resolve(__dirname, '../public'))); //where to look for the static things (css, images)
    app.use(express.urlencoded({extended: false}));
};

module.exports=expressConfig;