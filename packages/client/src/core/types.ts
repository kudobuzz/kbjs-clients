

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
    ETSY = 'etsy',
}

export interface CreateReviewPayload {
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
}


export interface Review extends CreateReviewPayload {
    id: string
    created_at: Date
    updated_at: Date
}