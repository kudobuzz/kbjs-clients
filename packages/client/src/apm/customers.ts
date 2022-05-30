import request from "../request";
import utils from "../utils";
import { CreateCustomerPayload, ApmCustomer } from "./types";




export default function customers(accessToken: string) {
    return {
        /**
         * Create or update customer
         */
        createOrUpdate: (payload: CreateCustomerPayload = utils.required('payload')) => {
            return request<ApmCustomer>({
                path: `/apms/${payload.apmId}/customers`,
                method: 'POST',
                accessToken,
                body: payload.body
            })
        }
    }
}