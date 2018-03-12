import axios from 'axios'

const base = process.env.API_BASE_URL
const path = '/products'

const get = (params, url) => {
  console.log(url)
  console.log(params)
  let urlString = ''

  if (params && !url) {
    urlString = `${path}?${params}`
  } else if (!params && !url) {
    urlString = path
  }

  console.log(urlString)

  return axios({
    baseURL: url ? url : base,
    url: urlString,
    method: 'get',
    credentials: 'same-origin'
  })
}

export default get
