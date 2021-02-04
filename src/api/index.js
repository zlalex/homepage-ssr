import axios from '../axios'
import globalUrl from '../config/global-url'

export default {
  getDataAsync: (params) => axios.get(globalUrl.index, params).then(res => res)
}