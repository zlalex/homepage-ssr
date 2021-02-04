import config from '../config'

export default () => sessionStorage.getItem(config.tokenName)