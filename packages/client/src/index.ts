'use strict'
import initBusiness from "./business"
import initApm from "./apm"
import utils from "./utils"


/**
 * Client wrapper for the Kudobuzz API
 */
export default function (accessToken: string = utils.required('accessToken')){
    return {
        /**
         * Kudobuzz Business API
         */
        business: initBusiness(accessToken),
        /**
         * Kudobuzz APM API
         */
        apm: initApm(accessToken),
    }
}