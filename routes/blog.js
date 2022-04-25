const express = require('express');
const Article = require('../models/article')
const router = express.Router();

router.get('/',(req,res)=>{
    const articles =[{
        title:'Mohamed',
        createdAt: new Date(),
        description:' Laajili'
    }];
    res.render('index',{articles:articles});
});

router.get('/new',(req,res)=>{
    res.render('/blog/new')});
router.get('/:id',(req,res)=>{

})

router.post('/',async (req,res)=>{
    const article = new Article({
        title: req.body.title,
        description: req.body.description,
        markdown: req.body.markdown
    })
    try{
        article = await article.save();
        res.redirect(`/blog/${article.id}`)
    }catch(err){
        res.render('/blog/new',{article: article})
    }

})

module.exports = router;