const db = require('../../config/mongoose.js')
const Url = require('../url.js')

const urls = require('../data/urls.json')

db.once('open', () => {
  console.log('Ready to produce seed')

  Url.insertMany(urls)
    .then(() => db.close())
    .then(() => console.log('url seed created!'))
    .catch(err => console.error(err))
})
