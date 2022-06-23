import client from '../'
import fixtures from '../../tests/fixtures'
import mock from '../../tests/mock'

describe('Business', () => {

  describe('Access Token', () => {
    const accessToken = fixtures.faker.random.alphaNumeric(32)
    const request = client({
      accessToken
    })
    const reviewClient = request.core.reviews

    describe('Create Review', () => {
      it('should fail if payload is not passed', () => {
        return expect(reviewClient.createReview).toThrowError(
          'payload is required'
        )
      })

      it('should create review', async () => {
        const response = {
          data: fixtures.makeReview()
        }
        const scope = mock({
          method: 'post',
          path: '/reviews',
          accessToken,
          response: response
        })
        const review = await reviewClient.createReview(fixtures.makeReview())
        expect(review).toEqual(response)
        expect(scope.isDone()).toBe(true)
      })
    })
  })

  describe('Client Id', () => {
    const clientId = fixtures.faker.random.alphaNumeric(32)

    const request = client({
      clientId
    })
    const reviewClient = request.core.reviews

    describe('Create Review', () => {
      it('should fail if payload is not passed', () => {
        return expect(reviewClient.createReview).toThrowError(
          'payload is required'
        )
      })

      it('should create review', async () => {
        const response = {
          data: fixtures.makeReview()
        }
        const scope = mock({
          method: 'post',
          path: '/reviews',
          clientId,
          response: response
        })
        const review = await reviewClient.createReview(fixtures.makeReview())
        expect(review).toEqual(response)
        expect(scope.isDone()).toBe(true)
      })
    })
  })
})
