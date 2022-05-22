

export interface CreatCustomerPayloadBody {
    business_id: string
    name: string
    email?: string
    phone?: string
    order_id?: string
}

export type CreateCustomerPayload = {
    apmId: string
    body: CreatCustomerPayloadBody
}

export interface ApmCustomer extends CreatCustomerPayloadBody {
    id: string
    created_at: Date
    updated_at: Date
}