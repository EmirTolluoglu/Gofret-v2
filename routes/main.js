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


module.exports = router;