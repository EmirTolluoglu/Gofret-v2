//router
const express = require('express');
const router = express.Router();
const user = require('../models/user')
const user_interests = require('../models/user_interests')
const user_friend3 = require('../models/user_friend3')
const user_friend = require('../models/user_friend')
const user_follow = require('../models/user_follow')
const user_badge = require('../models/user_badge')

const product = require('../models/product')
const product_request = require('../models/product_request')
const product_order = require('../models/product_order')
const product_comment = require('../models/product_comment')
const notification = require('../models/notification')
const category = require('../models/category')
const badge = require('../models/badge')


router.get('/', (req, res) => {
    res.send('users');
});
router.get('/profile', (req, res) => {
    res.render('profile', { title: 'Profile' });
});
router.get('/drive', (req, res) => {
    res.render('profile');
});
router.get('/trade', (req, res) => {
    res.render('trade', { layout: 'multi-step-form', title: 'Trade' });
});
// router.get('/:id', (req, res) => {
//     res.send(req.params.id);
// });

module.exports = router;