//router
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Users');
});


router.get('/:id', (req, res) => {
    res.send(req.params.id);
});

module.exports = router;