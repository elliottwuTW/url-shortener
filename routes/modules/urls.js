const express = require('express')
const router = express.Router()

const Url = require('../../models/url.js')
const getExistAppend = require('../../models/functions/get-exist-append.js')
const generateAppend = require('../../models/functions/generate-append.js')

// result
router.get('/:id', (req, res) => {
  const id = req.params.id

  Url.findById(id)
    .lean()
    .then(url => res.render('result', { result: url.append }))
})

// submit
router.post('/', (req, res) => {
  let origin = req.body.origin
  const length = origin.length
  // url 處理
  origin = origin[length - 1] === '/' ? origin.substring(0, length - 1) : origin

  Url.find()
    .lean()
    .then(urls => {
      const existUrl = urls.find(url => url.origin === origin)
      if (existUrl) {
        res.redirect(`/urls/${existUrl._id}`)
      } else {
        // get all existing appends
        getExistAppend()
          .then(existAppends => {
            // generate a non-repeated append
            const newAppend = generateAppend(existAppends)

            // create a new url document
            Url.create({ origin, append: newAppend })
              .then(url => res.redirect(`/urls/${url._id}`))
              .catch(err => console.error(err))
          })
      }
    })
    .catch(err => console.error(err))
})

module.exports = router
