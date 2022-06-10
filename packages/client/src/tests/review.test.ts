import initReviews from '../core/reviews'
import fixtures from '../../tests/fixtures'
import mock from '../../tests/mock'

describe('Business', () => {
    const accessToken = fixtures.faker.random.alphaNumeric(32)
    const reviewClient = initReviews(accessToken)

    it('should throw error if accessToken is not passed', () => {
        return expect(initReviews).toThrowError('accessToken is required')
    })

    describe('Create Review', () => {
        
        it('should fail if payload is not passed', () => {
            return expect(reviewClient.createReview).toThrowError(
                'payload is required'
            )
        })

        it('should create review', async () => {
            const businessId = fixtures.faker.random.alphaNumeric(32)
            const response = {
                data: fixtures.makeReview()
            }
            const scope = mock({
                method: 'get',
                path: `/businesses/${businessId}/apms`,
                accessToken,
                response: response
            })
            const review = await reviewClient.createReview(fixtures.makeReview())
            expect(review).toEqual(response)
            expect(scope.isDone()).toBe(true)
        });
    })
})
