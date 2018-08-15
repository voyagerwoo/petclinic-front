import axios from 'axios'

const serviceHost = 'http://localhost:9460'
var config = {
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
  }
}

export default {
  fetchVets: () => {
    return axios.get(`${serviceHost}/open/vets`, config).then(r => r.data)
  }
}
