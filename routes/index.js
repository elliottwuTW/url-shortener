const express = require('express')
const router = express.Router()

// route modules
const home = require('./modules/home.js')
const urls = require('./modules/urls')
const error = require('./modules/error.js')

router.use('/error', error)
router.use('/', home)
router.use('/urls', urls)

module.exports = router
