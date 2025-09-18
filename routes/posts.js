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
    if (!post) {
        return res.status(404).render('error', { message: 'Post not found' });
    }
    res.render('show', { post });
});

// Edit Post Form
router.get('/:id/edit', (req, res) => {
    const post = posts.find(p => p.id === parseInt(req.params.id));
    if (!post) {
        return res.status(404).render('error', { message: 'Post not found' });
    }
    res.render('edit', { post });
});

// Update Post
router.post('/:id', (req, res) => {
    const { title, content, author } = req.body;
    const post = posts.find(p => p.id === parseInt(req.params.id));
    if (!post) {
        return res.status(404).render('error', { message: 'Post not found' });
    }
    post.title = title;
    post.content = content;
    post.author = author;
    res.redirect('/');
});

// Delete Post
router.post('/:id/delete', (req, res) => {
    const postIndex = posts.findIndex(p => p.id === parseInt(req.params.id));
    if (postIndex === -1) {
        return res.status(404).render('error', { message: 'Post not found' });
    }
    posts.splice(postIndex, 1);
    res.redirect('/');
});

module.exports = router;
