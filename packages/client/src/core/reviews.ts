import { Request } from "../request";
import utils from "../utils";
import { CreateReviewPayload, Review } from "./types";

export default function reviews(request: Request = utils.required('authPayload')) {
    return {
        /**
         * 
         * Create a review on kudobuzz
         */
        createReview: async (payload: CreateReviewPayload = utils.required('payload')) => {
            return request<Review>({
                path: '/reviews',
                method: 'POST',
                body: payload,
            })
        }
    }
}