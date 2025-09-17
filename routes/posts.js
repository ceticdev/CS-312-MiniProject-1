
const express = require('express');
const router = express.Router();

// New Post Form
router.get('/new', (req, res) => {
    res.render('new');
});

// Create Post
router.post('/', (req, res) => {
    const { title, content, author, createdAt } = req.body;
    const newPost = { id: Date.now(), title, content, author, createdAt };
    posts.push(newPost);
    res.redirect('/');
});


// Show Post
router.get('/:id', (req, res) => {
    const post = posts.find(p => p.id === parseInt(req.params.id));
    res.render('show', { post });
});

// Edit Post Form
router.get('/:id/edit', (req, res) => {
    const post = posts.find(p => p.id === parseInt(req.params.id));
    res.render('edit', { post });
});

// Update Post
router.post('/:id', (req, res) => {
    const { title, content, author } = req.body;
    const post = posts.find(p => p.id === parseInt(req.params.id));
    post.title = title;
    post.content = content;
    post.author = author;
    res.redirect('/');
});

// Delete Post
router.post('/:id/delete', (req, res) => {
    posts = posts.filter(p => p.id !== parseInt(req.params.id));
    res.redirect('/');
});

module.exports = router;
