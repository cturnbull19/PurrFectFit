const express = require('express');
const router = express.Router();

//GET /api/health
router.get('/health', (req, res, next) => {
    res.send('OK');
});

//ROUTER: /api/exercises
router.use('/exercises', require('./exercises'));
router.use('/users', require('./users'));
router.use('/membership', require('./memberships'));
router.use('/likes', require('./likes'));


module.exports = router;