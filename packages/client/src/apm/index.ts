import { ApmProfile } from  '../types'
import { CreateCustomerPayload, ApmCustomer } from './types'
import utils from '../utils'
import request from "../request";



export default function initApm(accessToken: string = utils.required('accessToken')) {
    return {
        /**
         * Create or update apm customer
         */
        createCustomer: (payload: CreateCustomerPayload = utils.required('payload')) => {            
            return request<ApmCustomer>({
                path: `/apms/${payload.apmId}/customers`,
                method: 'POST',
                accessToken,
                body: payload.body
            })
        }
    }
}