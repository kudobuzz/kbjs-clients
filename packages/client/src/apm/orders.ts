import { Request } from '../request'
import utils from '../utils'
import { CreateOrderPayload, ApmOrder, FetchOrdersQuery } from './types'

export default function orders (request: Request) {
  return {
    /**
     * Create or update an order
     */
    createOrUpdate: async (
      payload: CreateOrderPayload = utils.required('payload')
    ) => {
      return request<ApmOrder>({
        path: '/apms/orders',
        method: 'POST',
        body: payload
      })
    },
    /**
     * Fetch orders 
     */
    fetchOrders: (query: FetchOrdersQuery = utils.required('query')) => {
      return request<ApmOrder[]>({
        path: '/apms/orders',
        method: 'GET',
        query
      })
    },
    /**
     * Get order by id
     */
    getOrderById: (id: string = utils.required('id')) => {
      return request<ApmOrder>({
        path: `/apms/orders/${id}`,
        method: 'GET'
      })
    }
  }
}
