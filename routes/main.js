//router
const express = require('express');
const router = express.Router();




router.get('/', (req, res) => {
    res.redirect('/explore');
});

router.get('/explore', (req, res) => {
    res.render('explore', { title: 'Explore' });
});


router.get('/sign-up', (req, res) => {
    res.render('sign-up', { title: 'Gofret | Sign-up', layout: 'multi-step-form' });
});


router.get('/login', (req, res) => {
    res.render('login');
});

module.exports = router;