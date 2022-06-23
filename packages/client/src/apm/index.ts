import { Request } from '../request';
import { ApmProfile } from './types';
import utils from '../utils'
import customers from './customers';
import orders from './orders';


export default function initApm(request: Request = utils.required('authPayload')) {
    return {
        customers: customers(request),
        orders: orders(request),
        /**
         * Get apm profile by business Id
         */
        getApm: (businessId: string = utils.required('businessId')) => {
            return request<ApmProfile>({
                path: `/businesses/${businessId}/apms`,
                method: 'GET',
            })
        }
    }
}