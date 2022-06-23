import client from '../'
import fixtures from '../../tests/fixtures'
import mock from '../../tests/mock'

describe('Apm', () => {

    

    describe('Customers', () => {
        const accessToken = fixtures.faker.random.alphaNumeric(32)
        const businessClient = client({
            accessToken
        }).apm

        describe('Create or Update Customer', () => {
            it('should fail if payload is not passed', () => {
                return expect(businessClient.customers.createOrUpdate).toThrowError(
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
                await businessClient.customers.createOrUpdate({
                    body: payload,
                    apmId
                })
                expect(scope.isDone()).toBe(true)
            })
        })
    })

    describe('Orders', () => {
        const accessToken = fixtures.faker.random.alphaNumeric(32)
        const businessClient = client({
            accessToken
        }).apm

        describe('Create Or Order', () => {
            it('should fail if payload is not passed', () => {
                return expect(businessClient.orders.createOrUpdate).toThrowError(
                    'payload is required'
                )
            })

            it('should create order', async () => {
                const payload = fixtures.makeOrder()
                const scope = mock({
                    method: 'post',
                    path: '/apms/orders',
                    accessToken,
                    body: payload,
                    response: payload
                })
                await businessClient.orders.createOrUpdate(payload)
                expect(scope.isDone()).toBe(true)
            })
        });

        describe('Get Single Order', () => {
            it('should fail if payload is not passed', () => {
                return expect(businessClient.orders.getOrderById).toThrowError(
                    'id is required'
                )
            })

            it('should get single order', async () => {
                const payload = fixtures.makeOrder()
                const orderId = fixtures.faker.random.alphaNumeric(32)
                const scope = mock({
                    method: 'get',
                    path: `/apms/orders/${orderId}`,
                    accessToken,
                    response: {
                        data: payload,
                    },
                })
                await businessClient.orders.getOrderById(orderId)
                expect(scope.isDone()).toBe(true)
            })
        });

        describe('Fetch Orders', () => {
            it('should fail if payload is not passed', () => {
                return expect(businessClient.orders.fetchOrders).toThrowError(
                    'query is required'
                )
            })

            it('should fetch order', async () => {
                const payload = fixtures.makeOrder()
                const businessId = fixtures.faker.random.alphaNumeric(32)
                const scope = mock({
                    method: 'get',
                    path: '/apms/orders',
                    accessToken,
                    response: {
                        data: payload,
                        metadata: {
                            count: 1
                        }
                    },
                    query: {
                        business_id: businessId
                    }
                })
              const orders =  await businessClient.orders.fetchOrders({
                    business_id: businessId
                })
                
                expect(scope.isDone()).toBe(true)
            })
        });
    })
})
