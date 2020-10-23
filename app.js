const express = require('express')

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('app created!')
})

app.listen(port, () => {
  console.log(`The app is running on port ${port}`)
})
