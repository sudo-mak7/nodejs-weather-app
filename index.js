const express = require('express')
const bodyParser = require('body-parser')
const weatherRequest = require('./requests/weather-request')
// const { request, response } = require('express')

const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (request, response) => {
  response.render('index')
})

app.post('/', async (request, response) => {
  const { city } = request.body

  const { weather, error } = await weatherRequest(city)
  console.log('Weather', weather)
  console.log('Error', error)
  response.render('index')
})

app.listen(3000, () => {
  console.log('Server has started on port 3000...')
})