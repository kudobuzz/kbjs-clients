

interface BaseQuery {
    limit?: number
    cursor?: string
    sort?: string
}
export interface CreatCustomerPayloadBody {
    business_id: string
    email?: string
    phone?: string
    order_id?: string
    total_spent?: string,
    first_name?: string,
    last_name: string,
    orders_count?: number,
    external_customer_id?: string,
    updated_at_platform?: Date
    created_at_platform?: Date
    accepts_marketing?: boolean
    note?: boolean
    state?: string
    verified_email?: boolean
}


export type CreateCustomerPayload = {
    apmId: string
    body: CreatCustomerPayloadBody
}

export enum Platforms {
    WEBSITE = 'website', WORDPRESS = 'wordpress', WEEBLY = 'weebly'
}

export interface CreateOrderPayload {
    subtotal_price: string
    buyer_accepts_marketing?: boolean
    cart_token?: string,
    number: number
    currency: number
    business_id: string
    platform: Platforms,
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
    },
    line_items: {
        title: string
        sku?: string,
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

export interface ApmOrder extends CreateOrderPayload {
    id: string
    created_at: Date
    updated_at: Date
}

export interface FetchOrdersQuery extends BaseQuery {
    business_id: string
}

export interface ApmCustomer extends CreatCustomerPayloadBody {
    id: string
    created_at: Date
    updated_at: Date
}