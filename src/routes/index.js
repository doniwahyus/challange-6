const express = require('express');
const router = express.Router()
const con = require('../controllers');
const mid = require('../helpers/middlewere')

router.post('/auth/register', con.auth.register);
router.post('/auth/login', con.auth.login);
router.post('/auth/logout', con.auth.logout);
router.get('/auth/whoami', mid.cekLogin ,con.auth.whomami);


router.post('/user_game_biodata/create', mid.cekLogin,con.bio.create);
router.put('/user_game_biodata/update', mid.cekLogin,con.bio.update);
router.delete('/user_game_biodata/delete', mid.cekLogin, con.bio.delete);


router.post('/user_game_history/create', mid.cekLogin,con.his.create);
router.put('/user_game_history/update', mid.cekLogin,con.his.update);
router.delete('/user_game_history/delete', mid.cekLogin, con.his.delete);

module.exports = router;