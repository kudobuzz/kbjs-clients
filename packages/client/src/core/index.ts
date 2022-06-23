
import { Request } from "../request";
import utils from "../utils";
import reviews from "./reviews";



export default function initCore(request: Request = utils.required('authPayload')) {
    return {
        /**
         * Interact with reviews endpoints
         */
        reviews: reviews(request),
    }
}