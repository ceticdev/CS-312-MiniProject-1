
const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index', { posts: posts });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


const postsRouter = require('./routes/posts');

global.posts = [];

app.use('/posts', postsRouter);

