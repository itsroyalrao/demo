const path = require('path');
const express = require('express');
const router = express.Router();

router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'views', '/add-product.html'))
})
router.post('/add-product', (req, res, next) => {
    console.log(`${req.body.titleName} : ${req.body.titleValue}`);
    res.redirect('/shop');
})

module.exports = router;