import utils from '../utils'
import customers from './customers';
import orders from './orders';


export default function initApm(accessToken: string = utils.required('accessToken')) {
    return {
        customers: customers(accessToken),
        orders: orders(accessToken)
    }
}