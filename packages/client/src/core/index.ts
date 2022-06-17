
import utils from "../utils";
import reviews from "./reviews";



export default function initMain(accessToken: string = utils.required('accessToken')) {
    return {
        /**
         * Interact with reviews endpoints
         */
        reviews: reviews(accessToken),
    }
}