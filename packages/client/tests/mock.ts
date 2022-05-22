'use strict'

import nock from 'nock'

type RequestPayload = {
    method: 'get' | 'post' | 'delete' | 'put',
    path: string
    body?: any
    query?: any
    status?: 200 | 400 | 401 | 500 | 201
    response?: any
    accessToken: string
}


export default function mockApiRequests({
    method,
    path,
    body,
    query = {},
    status = 200,
    response,
    accessToken
}: RequestPayload): nock.Scope {
    const nockBase = nock('https://api.kudobuzz.com', {
        reqheaders: {
            'Authorization': `Bearer ${accessToken}`
        }
    })
    const mapMethodToNockMethod = {
        get: nockBase.get.bind(nockBase),
        post: nockBase.post.bind(nockBase),
        put: nockBase.put.bind(nockBase)
    }
    return mapMethodToNockMethod[method](`/v1${path}`, body).query(query).reply(status, response)
}

