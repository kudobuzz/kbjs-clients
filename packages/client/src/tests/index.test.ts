'use strict'
import makeClient from '../index'

describe('Client', () => {
  it('should throw error if accessToken or clientId is not passed', () => {
    expect(makeClient).toThrow('clientId or accessToken is required')
  })
  it('should have the right return values', () => {
    const client = makeClient({
        accessToken: 'accessToken',
    })
    expect(Object.keys(client)).toEqual(['core', 'apm'])
  });
})
