const express=require('express');

const app=express();
const PORT=5000;

//Express config (static config)
const expressConfig=require('./config/exspressConfig');
expressConfig(app);

//require('./config/exspressConfig')(app); //same as the previous two 

//Handlebars config
const handlebarsConfig=require('./config/handlebarsConfig');
handlebarsConfig(app);

//Routes
app.get('/', (req, res)=>{
    res.render('index')
});

app.listen(PORT, ()=> console.log(`Server is running on port ${PORT}...`))