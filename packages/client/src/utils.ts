'use strict'

import kbjsCore from '@kudobuzz/kbjs-core'

const required = kbjsCore.utils.required()
const { schemaValidator, validateSchema } = kbjsCore.validator

export default {
    required,
    schemaValidator,
    validateSchema
}
