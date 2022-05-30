'use strict'

import { Method } from 'axios'
import kbjsCore from '@kudobuzz/kbjs-core'

import utils from './utils'

const client = kbjsCore.client

type RequestPayload = {
    path: string,
    method: Method
    accessToken: string
    query?: any
    body?: any
}

export interface Response<T> {
    data: T
    metadata?: {
        count: number
    }
}


/**
 * Make request to kudobuzz api
 */
export default function request<T>({
    path = utils.required('path'),
    method = utils.required('method'),
    accessToken = utils.required('accessToken'),
    query = {},
    body
}: RequestPayload): Promise<Response<T>> {
    return client({
        url: `/v1${path}`,
        method: method,
        headers: {
            'Authorization': `Bearer ${accessToken}`,
        },
        params: query,
        data: body
    }).then(response => response.data)
}