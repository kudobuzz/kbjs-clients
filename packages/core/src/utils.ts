
type ParamType = string | number | Date

const defaultErrorFunc = str => {
  throw new Error(`${str} is required`)
}

/**
 * Ensure params are passed
 */
function required (errorFunc = defaultErrorFunc) {
  return function requiredParam<T = ParamType> (str: string): T {
    return errorFunc(str)
  }
}

export default {
  required
}
