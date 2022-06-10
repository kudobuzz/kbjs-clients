import request from "../request";
import utils from "../utils";
import { CreateReviewPayload, Review } from "./types";

export default function reviews(accessToken: string) {
    return {
        /**
         * 
         * Create a review on kudobuzz
         */
        createReview: async (payload: CreateReviewPayload = utils.required('payload')) => {
            return request<Review>({
                path: '/reviews',
                method: 'POST',
                accessToken,
                body: payload
            })
        }
    }
}