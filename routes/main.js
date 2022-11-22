//router
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.redirect('/explore');
});

router.get('/explore', (req, res) => {
    res.render('explore', { title: 'Explore' });
});

router.get('/trade', (req, res) => {
    res.render('trade', { layout: 'multi-step-form', title: 'Trade' });
});

router.get('/profile', (req, res) => {
    res.render('profile', { title: 'Profile' });
});

router.get('/drive', (req, res) => {
    res.render('profile');
});

router.get('/sign-up', (req, res) => {
    res.render('sign-up', { title: 'Gofret | Sign-up', layout: 'multi-step-form' });
});

module.exports = router;