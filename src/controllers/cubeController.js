const router=require('express').Router();
const cubeManager=require('../managers/cubeManager')

//path is '/cubes/create' but from index.js (app.use('/cubes', cubeController)) the '/cubes' is skipped
router.get('/create', (req, res)=>{
    res.render('create');
}); //returns the page that is for creating new cube

router.post('/create', (req, res)=>{
    const {name, description, imageUrl, difficultyLevel}=req.body;
    cubeManager.create({
        name,
        description,
        imageUrl,
        difficultyLevel: Number(difficultyLevel)});
    res.redirect('/');
});//with req.body we get the data from the form

router.get('/:cubeId/details', (req, res)=>{
    const cube=cubeManager.getOne(req.params.cubeId);
    if(!cube){
        return res.redirect('/404');
    };
    res.render('details', cube);
});

module.exports=router;