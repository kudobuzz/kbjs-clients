import request from "../request";
import utils from "../utils";
import { CreateOrderPayload, ApmOrder, FetchOrdersQuery } from "./types";

export default function orders(accessToken: string) {
    return {
        createOrUpdate: async (payload: CreateOrderPayload = utils.required('payload')) => {
            return request<ApmOrder>({
                path: '/apms/orders',
                method: 'POST',
                accessToken,
                body: payload
            })
        },
        fetchOrders: (query: FetchOrdersQuery = utils.required('query')) => {
            return request<ApmOrder[]>({
                path: '/apms/orders',
                method: 'GET',
                accessToken,
                query
            })
        },
        getOrderById: (id: string = utils.required('id')) => {
            return request<ApmOrder>({
                path: `/apms/orders/${id}`,
                method: 'GET',
                accessToken,
            })
        }
    }
}