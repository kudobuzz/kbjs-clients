import { ApmProfile } from  '../types'
import utils from '../utils'
import request from "../request";



export default function initBusiness(accessToken: string = utils.required('accessToken')) {
    return {
        /**
         * Get business apm
         */
        getApm: (businessId: string = utils.required('businessId')) => {
            return request<ApmProfile>({
                path: `/businesses/${businessId}/apms`,
                method: 'GET',
                accessToken
            })
        }
    }
}