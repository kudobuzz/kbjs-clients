import request from '../request';
import { ApmProfile } from './types';
import utils from '../utils'
import customers from './customers';
import orders from './orders';


export default function initApm(accessToken: string = utils.required('accessToken')) {
    return {
        customers: customers(accessToken),
        orders: orders(accessToken),
        /**
         * Get apm profile by business Id
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