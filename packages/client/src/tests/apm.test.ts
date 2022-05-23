import initApm from '../apm'
import fixtures from '../../tests/fixtures'
import mock from '../../tests/mock'

describe('Apm', () => {
    const accessToken = fixtures.faker.random.alphaNumeric(32)
    const businessClient = initApm(accessToken)

    it('should throw error if accessToken is not passed', () => {
        return expect(initApm).toThrowError('accessToken is required')
    })

    describe('Get Create Customer', () => {
        it('should fail if payload is not passed', () => {
            return expect(businessClient.createOrUpdateCustomer).toThrowError(
                'payload is required'
            )
        })
        it('should create customer', async () => {
            const apmId = fixtures.faker.random.alphaNumeric(32)
            const payload = fixtures.makeCustomer()
            const scope = mock({
                method: 'post',
                path: `/apms/${apmId}/customers`,
                accessToken,
                body: payload,
                response: {}
            })
            await businessClient.createOrUpdateCustomer({
                body: payload,
                apmId
            })
            expect(scope.isDone()).toBe(true)
        });
    })
})
