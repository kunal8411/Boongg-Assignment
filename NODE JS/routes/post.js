const express= require('express');
const path= require('path');
const router= express.Router();
const postController = require('../controllers/postController')

router.post('/create', postController.create);




module.exports=router;
