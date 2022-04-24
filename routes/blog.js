const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    const articles =[{
        title:'Mohamed',
        createdAt: new Date(),
        description:' Laajili'
    }];
    res.render('index',{articles:articles});
});

router.get('/test/',(req,res)=>{
    res.render('test')});

module.exports = router;