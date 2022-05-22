'use strict'
import initBusiness from "./business"
import initApm from "./apm"
import utils from "./utils"


export default function (accessToken: string = utils.required('accessToken')){
    return {
        business: initBusiness(accessToken),
        apm: initApm(accessToken),
    }
}