import initBusiness from '../business'
import fixtures from '../../tests/fixtures'
import mock from '../../tests/mock'

describe('Business', () => {
    const accessToken = fixtures.faker.random.alphaNumeric(32)
    const businessClient = initBusiness(accessToken)

    it('should throw error if accessToken is not passed', () => {
        return expect(initBusiness).toThrowError('accessToken is required')
    })

    describe('Get Apm', () => {
        it('should fail if business Id is not passed', () => {
            return expect(businessClient.getApm).toThrowError(
                'businessId is required'
            )
        })
        it('should return apm settings', async () => {
            const businessId = fixtures.faker.random.alphaNumeric(32)
            const response = {
                data: fixtures.makeApm()
            }
            const scope = mock({
                method: 'get',
                path: `/businesses/${businessId}/apms`,
                accessToken,
                response: response
            })
            const apm = await businessClient.getApm(businessId)
            expect(apm).toEqual(response)
            expect(scope.isDone()).toBe(true)
        });
    })
})
