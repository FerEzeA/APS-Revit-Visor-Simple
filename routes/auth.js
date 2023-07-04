const express = require('express');
const { getPublicToken } = require('../services/aps.js');

let router = express.Router();

router.get('/api/auth/token', async function (req, res, next) {

    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    try {
        const token = await getPublicToken()
        res.json({
            access_token: token.access_token,
            expires_in: token.expires_in    
        });
    } catch (err) {
        next(err);
    }
});

module.exports = router;
