import  { Request } from "../request";
import utils from "../utils";
import { CreateCustomerPayload, ApmCustomer } from "./types";




export default function customers(request: Request) {
    return {
        /**
         * Create or update customer
         */
        createOrUpdate: (payload: CreateCustomerPayload = utils.required('payload')) => {
            return request<ApmCustomer>({
                path: `/apms/${payload.apmId}/customers`,
                method: 'POST',
                body: payload.body
            })
        }
    }
}