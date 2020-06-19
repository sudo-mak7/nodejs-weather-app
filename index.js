const express = require('express')
const { request, response } = require('express')

const app = express()

app.get('/', (request, response) => {
  response.end('Hello from Node.js!')
})

app.listen(3000, () => {
  console.log('Server has started on port 3000...')
})