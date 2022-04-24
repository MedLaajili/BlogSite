const express = require('express');
const app = express();
const blogRouter = require('./routes/blog')
app.listen(5000);

app.set('view engine','ejs');

app.use('/blog',blogRouter);