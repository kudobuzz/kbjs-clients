import { BasePaginateQuery } from "../types"



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
    tags?: string[]
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

export interface FetchOrdersQuery extends BasePaginateQuery {
    business_id: string
}

export interface ApmCustomer extends CreatCustomerPayloadBody {
    id: string
    created_at: Date
    updated_at: Date
}

export type ApmProfile = {
    data: {
      status: 'A' | 'D'
      external_platform_domain: string
      platform: string
      timezone: string
      email: string
      created_at: Date
      business_name: string
      business_id: string
      allow_video_reviews: boolean
      allow_photo_reviews: boolean
      allow_review_requests: boolean
      allow_blacklist: boolean
      message_credit: number
      num_of_days_after_which_to_send_mails: number
      email_frequency: 'send_for_oldest_order'
      multiple_order_priority: 'ai_prioritize'
      template: {
        products: {
          body: string
          subject: string
        }
        business: {
          body: string
          subject: string
        }
      }
      template_settings: {
        review_rating_star_color: string
        mso_review_rating_star_color: string
        review_rating_button_text_color: string
        review_rating_button_background_color: string
        multiple_product_template_button_text_color: string
        multiple_product_template_button_background_color: string
      }
      translations: {
        rating_text: string
        review_text: string
        submit_review_text: string
        title_text: string
        write_review_text: string
        thank_you_page_title_text: string
        thank_you_for_the_review_text: string
        share_to_text: string
        business_review_already_submitted_text: string
        upload_media_text: string
        drag_and_drop_media_text: string
        maximum_media_size_text: string
        publish_text: string
        review_has_been_updated_with_media_text: string
        maximum_media_files_text: string
        review_not_updated_text: string
        or_browse_to_choose_file_text: string
        file_exceeds_max_size_text: string
        review_already_submitted_for_purchase_text: string
        emoji_brilliant_text: string
        emoji_good_text: string
        emoji_okay_text: string
        emoji_bad_text: string
        emoji_not_good_text: string
        experience_text: string
        product_upsell_text: string
      }
      has_order_syncing: false
      id: string
      updated_at: string
      review_reminders?: {
        status: 'D' | 'A'
        schedule_days: [number]
      }
    }
  }
  