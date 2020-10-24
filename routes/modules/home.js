const express = require('express')
const router = express.Router()

const Url = require('../../models/url.js')

router.get('/', (req, res) => {
  res.render('index')
})

// redirect
router.get('/:append', (req, res) => {
  Url.findOne({ append: req.params.append })
    .then(url => {
      const startIndex = url.origin.lastIndexOf('/') + 1
      const redirectURL = url.origin.substring(startIndex, url.origin.length)
      // absolute redirect
      res.redirect(`//${redirectURL}`)
    })
})

module.exports = router
