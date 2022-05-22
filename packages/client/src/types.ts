
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
