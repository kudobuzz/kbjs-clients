'use strict'
import initCore from "./core"
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
        core: initCore(accessToken),
        /**
         * Kudobuzz APM API
         */
        apm: initApm(accessToken),
    }
}