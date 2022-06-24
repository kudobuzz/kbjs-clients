export enum ReviewPlatform {
  KUDOBUZZ = 'kudobuzz',
  APM = 'apm'
}

export enum Sources {
  CUSTOM = 'custom'
}

export enum Channels {
  FACEBOOK = 'facebook',
  GOOGLE = 'google',
  EMAIL = 'email',
  TWITTER = 'twitter',
  AMAZON = 'amazon',
  YELP = 'yelp',
  ETSY = 'etsy'
}

export interface CreateReviewPayload {
  /**
   * Platform source
   * @example
   * kudobuzz
   */
  platform: ReviewPlatform.KUDOBUZZ
  /**
   * Review Source
   */
  source: Sources
  /**
   * Date review was collected on your platform
   */
  created_at_platform: Date
  /**
   * Reviewer
   */
  reviewer: {
    /**
     * Id of the reviewer on your platform
     */
    external_reviewer_id: string
    /**
     * Name of the Reviewer on your platform
     */
    display_name: string
    /**
     * Review Source Channel
     */
    channel: Channels
    /**
     * Email of the Reviewer
     */
    email?: string
    /**
     * Reviewer Image
     */
    image?: {
      /**
       * Profile Url of Reviewer
       */
      profile_url?: string
    }
  }
  /**
   * Review rating
   */
  rating: 1 | 2 | 3 | 4 | 5
  /**
   * The ids of product this review is associated to
   */
  external_unique_id?: string[]
  /**
   * Review Title
   */
  title?: string
  /**
   * Review message
   */
  message: string
  /**
   * Id of media associated with this review
   */
  media?: string[]
}

export interface Review extends CreateReviewPayload {
  /**
   * Review Id
   */
  id: string
  /**
   * Date Review Created on Kudobuzz
   */
  created_at: Date
  /**
   * Date Review Updated on Kudobuzz
   */
  updated_at: Date
}
