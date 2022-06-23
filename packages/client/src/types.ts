import { XOR } from "ts-xor"

export interface BasePaginateQuery {
  limit?: number
  cursor?: string
  sort?: string
}

export type AuthPayload = XOR<{
  /**
   * Server side accessToken. 
   * @warning Do not expose this
   */
  accessToken
}, {
  /**
   * Client ID for making requests from the frontend
   */
  clientId: string
}>