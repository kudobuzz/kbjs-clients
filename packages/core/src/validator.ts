import * as yup from 'yup'
import utils from './utils'

const required = utils.required()


/**
 * Validate the given data against the given schema.
 */
function validateSchema<T = any> ({
  schema = required('schema'),
  data = required('data')
}: {
  schema: yup.AnySchema
  data: T
}) {
  return schema.validate(data)
}

const schemaValidator = yup

export default {
  validateSchema,
  schemaValidator
}
