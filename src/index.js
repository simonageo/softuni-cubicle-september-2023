const express=require('express');

const app=express();
const PORT=5000;
const homeController=require('./controllers/homeController');
const cubeController=require('./controllers/cubeController');

//Express config (static config)
const expressConfig=require('./config/exspressConfig');
expressConfig(app);

//require('./config/exspressConfig')(app); //same as the previous two 

//Handlebars config
const handlebarsConfig=require('./config/handlebarsConfig');
handlebarsConfig(app);

//Routes
app.use(homeController);
app.use('/cubes', cubeController); //every request that starts with '/cubes' send it to that controller

app.listen(PORT, ()=> console.log(`Server is running on port ${PORT}...`))