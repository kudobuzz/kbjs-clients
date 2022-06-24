# APM (After Purchase Mail)

## Customers

### #createOrUpdate()

Allows you to push customer to your Kudobuzz Account. This allows creating segment for customers for APM campaigns See more [here](https://support.kudobuzz.com/en/article/creating-customer-segments-on-kudobuzz-5xeyj0/)

#### Usage

```javascript
import makeClient from '@kudobuzz/kbclient'
const client = makeClient({
  accessToken: 'Your access token here',
  clientId: 'Your client ID here'
})

await client.apm.customers.createOrUpdate(customer)
```

#### Payload

| Field   | Description      | Required |
| ------- | ---------------- | -------- |
| payload | customer payload | yes      |

```javascript

{
   /**
   * APM Id
   */
    apmId: string
    body: {
          /**
   * The business you want to push this data for
   */
  business_id: string
  /**
   * Email address of the customer
   */
  email?: string
  /**
   * Phone number of the customer
   */
  phone?: string
  /**
   * Order ID of the customer if this customer made an order on a thirdparty provider
   * @example
   * wix, shopify, bigcommerce
   */
  order_id?: string
  /**
   * Total amount spent if this customer made an order on a thirdparty provider
   * @example
   * wix, shopify, bigcommerce
   */
  total_spent?: string
  /**
   * Customer first name
   */
  first_name?: string
  /**
   * Customer last name
   */
  last_name: string
  /**
   * Total orders of this customer on your platform
   * @example
   * wix, shopify, bigcommerce
   */
  orders_count?: number
  /**
   * Customer id on your platform
   */
  external_customer_id?: string
  /**
   * Date customer was created on your platform
   */
  updated_at_platform?: Date
    /**
   * Date customer was updated on your platform
   */
  created_at_platform?: Date
  accepts_marketing?: boolean
  note?: boolean
  state?: string
  verified_email?: boolean
  tags?: string[]
  /**
   * include customer id to update customer information
   */
  id?: string
    }
}

```

## Orders

### #createOrUpdate()

Create or update an order

#### Usage

```javascript
import makeClient from '@kudobuzz/kbclient'
const client = makeClient({
  accessToken: 'Your access token here',
  clientId: 'Your client ID here'
})

await client.apm.orders.createOrUpdate(order)
```

#### Payload

| Field   | Description   | Required |
| ------- | ------------- | -------- |
| payload | Order payload | yes      |

```javascript

{
  subtotal_price: string
  buyer_accepts_marketing?: boolean
  cart_token?: string
  number: number
  currency: number
  business_id: string
  platform: Platforms
  processed_at?: Date
  source: string
  order_id: string | number
  closed_at?: Date
  created_at_platform?: Date
  updated_at_platform?: Date
  cancelled_at?: Date
  // todo: add financial_status types
  financial_status?: string
  total_line_items_price: number
  email?: string
  phone?: string
  total_price?: number
  name: string
  fulfilled_at?: Date
  order_number: number
  fulfillment_status?: string
  customer: {
    total_spent?: string
    first_name?: string
    last_name?: string
    orders_count?: string
    id?: string
    accepts_marketing?: string
    note?: string
    state?: string
    verified_email?: string
  }
  line_items: {
    title: string
    sku?: string
    product_exists?: boolean
    image?: string
    url?: string
    requires_shipping?: boolean
    variant_id?: string
    fulfillment_service?: string
    total_discount?: number
    variant_title?: string
    vendor?: string
    price: number
    taxable?: boolean
    name: string
    product_id?: string | number
    grams?: number
    fulfillment_status?: string
    variant_inventory_management?: string
    quantity: number
  }[]
}

```

### #fetchOrders()

| Field       | Description                 | Required |
| ----------- | --------------------------- | -------- |
| limit       | Number of items to fetch    | No       |
| cursor      | Id of next items to fetch   | No       |
| sort        | Sort criteria               | No       |
| business_id | ID of the business to fetch | Yes      |

#### Usage

```javascript
import makeClient from '@kudobuzz/kbclient'
const client = makeClient({
  accessToken: 'Your access token here',
  clientId: 'Your client ID here'
})

await client.apm.orders.fetchOrders(query)
```

### #getOrderById()

| Field   | Description | Required |
| ------- | ----------- | -------- |
| orderId | Order Id    | Yes      |

#### Usage

```javascript
import makeClient from '@kudobuzz/kbclient'
const client = makeClient({
  accessToken: 'Your access token here',
  clientId: 'Your client ID here'
})

await client.apm.orders.getOrderById(id)
```
