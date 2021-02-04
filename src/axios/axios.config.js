import config from '../config'

const axiosConfig = {
  baseURL: config.host,
  headers: {
    post: {
      'Content-Type': 'application/json;charset=utf-8',
    }
  },
}

export default axiosConfig
