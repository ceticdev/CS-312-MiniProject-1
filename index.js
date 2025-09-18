const express = require('express');
const app = express();
const port = 3000;

require('./data.js');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index', { posts: posts });
});

const postsRouter = require('./routes/posts');
app.use('/posts', postsRouter);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
