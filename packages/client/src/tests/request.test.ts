import request from '../request'
import mock from '../../tests/mock'

describe('Request', () => {
  const payload = {
    path: '/apms',
    method: 'GET',
    accessToken: 'accessToken'
  }

  const requiredParams = ['path', 'method', 'accessToken']

  requiredParams.forEach(param => {
    it(`should throw error if ${param} is not passed`, () => {
      const params = { ...payload } as any
      delete params[param]
      expect(() => request(params)).toThrowError(`${param} is required`)
    })
  })

  it('should make request to kudobuzz api', async () => {
    const scope = mock({
      path: payload.path,
      method: 'get',
      accessToken: payload.accessToken
    })
    await request(payload as any)
    expect(scope.isDone()).toBe(true)
  })

  it('should make request to kudobuzz api given query params', async () => {
    const payload2 = {
      ...payload,
      path: '/business_id/apms',
      query: {
        business_id: '3242424234234234'
      }
    }

    const scope = mock({
      path: payload2.path,
      method: 'get',
      accessToken: payload2.accessToken,
      query: payload2.query
    })
    await request(payload2 as any)
    expect(scope.isDone()).toBe(true)
  })

  it('should make post request to kudobuzz', async () => {
    const payload2 = {
      ...payload,
      path: '/business_id/apms',
      method: 'POST',
      query: {
        business_id: '3242424234234234'
      }
    }

    const response = {
      data: {
        status: 'A',
        external_platform_domain: 'https://www.kudobuzz.com',
        platform: 'website',
        timezone: 'Africa/Abidjan',
        email: 'abdul+55@kudobuzz.com',
        created_at: '2020-11-19T22:31:29.727Z',
        business_name: 'kudobuzz',
        business_id: '5a82ae8e6b85a5000135496c',
        allow_video_reviews: false,
        allow_photo_reviews: false
      }
    }

    mock({
      path: payload2.path,
      method: 'post',
      accessToken: payload2.accessToken,
      query: payload2.query,
      response
    })
    expect(request(payload2 as any)).resolves.toEqual(response)
  })
})
