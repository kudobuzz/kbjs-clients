'use strict'
import initMain from "./core"
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
        main: initMain(accessToken),
        /**
         * Kudobuzz APM API
         */
        apm: initApm(accessToken),
    }
}