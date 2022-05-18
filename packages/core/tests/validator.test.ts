'use strict'
import validator from '../src/validator'

describe('Validator', () => {
  const schema = validator.schemaValidator.object().shape({
    name: validator.schemaValidator.string().required()
  })
  const data = {}

  it('should throw error if schema is not passed', () => {
    return expect(() => validator.validateSchema({} as any)).toThrow(
      'schema is required'
    )
  })

  it('should throw error if data is not passed', () => {
    return expect(() => validator.validateSchema({ schema } as any)).toThrow(
      'data is required'
    )
  })

  it('should throw error if validation fails', () => {
    return expect(validator.validateSchema({ schema,  data })).rejects.toThrow(
        "name is a required field"
      )
  });
})
