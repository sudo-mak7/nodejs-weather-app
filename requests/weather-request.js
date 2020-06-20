const requestPromise = require('request-promise')

module.exports = async function (city = '') {
  if (!city) {
    throw new Error('Название города не может быть пустым')
  }

  const KEY = 'a9ba1591dfce89b92152af00e83534d5'
  const uri = 'http://api.openweathermap.org/data/2.5/weather'

  const options = {
    uri,
    qs: {
      appid: KEY,
      q: city,
      units: 'imperial'
    },
    json: true
  }

  try {
    const data = await requestPromise(options)
    const celsius = (data.main.temp - 32) * 5/9

    return {
      weather: `${data.name}: ${celsius.toFixed(0)}`,
      error: null
    }
  } catch (error) {
    return {
      weather: null,
      error: error.error.message
    }
  }
}