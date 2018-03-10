import axios from 'axios'

const base = process.env.API_BASE_URL

const get = (url, params) =>
  axios({
    baseURL: base,
    url: `${url}?${params}`,
    method: 'get',
    credentials: 'same-origin'
  })

export default get
