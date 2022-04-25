const express = require('express');
const mongoose = require('mongoose');
const app = express();
const blogRouter = require('./routes/blog')

//mongoose.connect('mongodb://127.0.0.1/blog',{useNewUrlParser:true, useUnifiedTopology:true});
mongoose.connect('mongodb+srv://laajili:test1234@nodetuto.n1hyy.mongodb.net/BlogProject?retryWrites=true&w=majority',{useNewUrlParser:true, useUnifiedTopology:true});
app.listen(5000);

app.set('view engine','ejs');

app.use('/blog',blogRouter);
app.use(express.urlencoded({extended:true}));