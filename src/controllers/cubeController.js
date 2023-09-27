const router=require('express').Router();

//path is '/cubes/create' but from index.js (app.use('/cubes', cubeController)) the '/cubes' is skipped
router.get('/create', (req, res)=>{
    res.render('create');
}); //returns the page that is for creating new cube

router.post('/create', (req, res)=>{
    res.redirect('/');
});//with req.body we get the data from the form

module.exports=router;