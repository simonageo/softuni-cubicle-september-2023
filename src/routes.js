const router=require('express').Router();
const homeController=require('./controllers/homeController');
const cubeController=require('./controllers/cubeController');

router.use(homeController);
router.use('/cubes', cubeController); //every request that starts with '/cubes' send it to that controller
router.get('*', (req, res)=>{
    res.redirect('/404')
});//at the end because '*' means everything else that is not included in the above


module.exports=router;