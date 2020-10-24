function sample(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

function getRandomCode() {
  const LENGTH = 5
  const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const uppercaseLetters = lowercaseLetters.toUpperCase()
  const numbers = '1234567890'
  const collection = (lowercaseLetters + uppercaseLetters + numbers).split('')

  let result = ''
  for (let index = 0; index < LENGTH; index++) {
    result += sample(collection)
  }
  return result
}

function generateAppend(existAppends) {
  let unfinished = true
  let append = ''
  while (unfinished) {
    append = getRandomCode()
    unfinished = existAppends.includes(append)
  }
  return append
}

module.exports = generateAppend
