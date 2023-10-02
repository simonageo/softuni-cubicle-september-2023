const express=require('express');
const routes=require('./routes');
const dbConnect=require('./config/dbConfig');
const app=express();
const PORT=5000;

//Express config (static config)
const expressConfig=require('./config/exspressConfig');
expressConfig(app);

//require('./config/exspressConfig')(app); //same as the previous two 

//Handlebars config
const handlebarsConfig=require('./config/handlebarsConfig');
handlebarsConfig(app);

//db config
dbConnect()
    .then(()=>console.log('DB Connected successfully'))
    .catch(err=>console.log('DB error: ', err.message));

//Routes
app.use(routes);

app.listen(PORT, ()=> console.log(`Server is running on port ${PORT}...`))