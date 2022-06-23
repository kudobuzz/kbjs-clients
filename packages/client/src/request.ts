'use strict'

import { Method } from 'axios'
import kbjsCore from '@kudobuzz/kbjs-core'
import { XOR } from 'ts-xor'

import utils from './utils'
import { AuthPayload } from './types'

const client = kbjsCore.client

type RequestPayload = {
  path: string
  method: Method
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
 * Call Axios Request
 */
export interface Request {
  <T>(payload: RequestPayload): Promise<Response<T>>
}

/**
 * Make request to kudobuzz api
 */
export default function request<T> ({
  accessToken,
  clientId
}: AuthPayload): Request {
  function makeRequest<T> ({
    path = utils.required('path'),
    method = utils.required('method'),
    query = {},
    body
  }: RequestPayload): Promise<Response<T>> {
    return client({
      url: `/v1${path}`,
      method: method,
      headers: {
        ...(accessToken && {
          Authorization: `Bearer ${accessToken}`
        }),
        ...(clientId && {
          'x-client-id': clientId
        })
      },
      params: query,
      data: body
    }).then(response => response.data)
  }
  return makeRequest
}
