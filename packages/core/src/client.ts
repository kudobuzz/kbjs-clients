import axiosRetry from 'axios-retry';
import axios from 'axios'
import constants from './constants'

axiosRetry(axios, { retries: constants.REQUEST_RETRY_COUNT });

const request  = axios.create({
    baseURL: constants.PRODUCTION_URL
})


export default request