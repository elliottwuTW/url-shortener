const express = require('express')
const router = express.Router()

// route modules
const home = require('./modules/home.js')
const urls = require('./modules/urls')

router.use('/', home)
router.use('/urls', urls)

module.exports = router
