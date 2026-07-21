const Auth = require("../controller/Auth")
const express = require('express')
const router = express.Router();

router.post('/login',Auth.Login );
router.post('/register',Auth.Regis );
module.exports = router;