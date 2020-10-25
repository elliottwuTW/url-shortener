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
      const urlStr = url.origin

      const startIndex = urlStr.match(/https?:\/\//g)[0].length
      const redirectURL = urlStr.substring(startIndex, urlStr.length)
      // absolute redirect
      res.redirect(`//${redirectURL}`)
    })
})

module.exports = router
