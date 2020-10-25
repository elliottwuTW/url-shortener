const Url = require('../url.js')

module.exports = async function () {
  const urls = await Url.find().lean()
  const existAppends = urls.map(url => url.append)

  return existAppends
}
