## Create Review

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

| Field   | Description      | Required | 
| ------- | ---------------- | -------- | 
| payload | Collected review payload | Yes      |

### Payload

```javascript
    platform: ReviewPlatform.KUDOBUZZ
    source: Sources
    created_at_platform: Date
    reviewer: {
        external_reviewer_id: string
        display_name: string
        channel: Channels,
        email?: string,
        image?: {
            profile_url?: string
        }
    }
    rating: 1 | 2 | 3 | 4 | 5
    /**
     * The id of a product this review is associated to
     */
    external_unique_id?: string[]
    title?: string
    message: string
    media?: string[]
    external_channel_id?: string

```