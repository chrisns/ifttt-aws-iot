const axios = require('axios')

exports.handler = async event =>
  axios.post(`https://maker.ifttt.com/trigger/${event.topic}/with/key/${process.env.iftttkey}`, {
    value1: event.value1,
    value2: event.value2,
    value3: event.value3
  }).then(r => [r.data, r.status, r.statusText])
