'use strict'
import initCore from "./core"
import initApm from "./apm"
import utils from "./utils"
import makeRequest from './request'
import { AuthPayload } from "./types"

const validator = utils.schemaValidator

const validateAuthCredentials = validator.object({
    accessToken: validator.string(),
    clientId: validator.string(),
}).test(
    'at-leat-one-passed',
    () => 'clientId or accessToken is required',
    (params) => {
    const values = Object.values(params).filter(value => value)
    return values.length > 0
})


/**
 * Client wrapper for the Kudobuzz API
 */
export default function (payload: AuthPayload) {
    const validated = validateAuthCredentials.validateSync(payload)
    const request = makeRequest(validated as any as AuthPayload)
    return {
        /**
         * Kudobuzz Core API
         */
        core: initCore(request),
        /**
         * Kudobuzz APM API
         */
        apm: initApm(request),
    }
}