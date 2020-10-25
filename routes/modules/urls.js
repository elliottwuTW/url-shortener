const express = require('express')
const router = express.Router()
const urlExist = require('url-exist')

const Url = require('../../models/url.js')
const getExistAppend = require('../../models/functions/get-exist-append.js')
const generateAppend = require('../../models/functions/generate-append.js')

// result
router.get('/:id', (req, res) => {
  const id = req.params.id
  const serverURL = 'http://localhost:3000/'

  Url.findById(id)
    .lean()
    .then(url => res.render('result', { result: serverURL + url.append }))
})

// submit
router.post('/', (req, res) => {
  let origin = req.body.origin
  const length = origin.length
  // remove the last '/'
  origin = origin[length - 1] === '/' ? origin.substring(0, length - 1) : origin

  // Check if url exists
  urlExist(origin)
    .then(exist => {
      if (!exist) return res.redirect('/error')
      else {
        Url.find()
          .lean()
          .then(urls => {
            const matchedUrl = urls.find(url => url.origin === origin)
            if (matchedUrl) {
              res.redirect(`/urls/${matchedUrl._id}`)
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
      }
    })
})

module.exports = router
