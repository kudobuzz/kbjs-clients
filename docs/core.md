## Create Review

### Authentication

To authentication with this API

- On your server use your Kudobuzz Token
- On the client side use your Kudobuzz Client Id

### Usage

```javascript
import makeClient from '@kudobuzz/kbclient'
const client = makeClient({
  accessToken: 'Your access token here',
  clientId: 'Your client ID here'
})

await client.core.reviews.createReview(reviewPayload)
```

### Params

| Field | Description | Required |  Types |
| ----- | ----------- | -------- | ----  |
| payload | Collected review | Yes | https://github.com/kudobuzz/kbjs-clients/blob/2dcc209160cde6259dfc59002e2ad976c681d116/packages/client/src/core/types.ts#L22 |


