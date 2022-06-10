'use strict'

import { faker } from '@faker-js/faker';

const makeApm = (overrides = {}) =>
    Object.assign({}, overrides, {
        status: 'A',
        external_platform_domain: `https://${faker.internet.domainName()}`,
        platform: 'website',
        timezone: 'Africa/Abidjan',
        email: faker.internet.email(),
        created_at: faker.date.past().toString(),
        business_name: faker.company.companyName(),
        business_id: '5a82ae8e6b85a5000135496c',
        allow_video_reviews: false,
        allow_photo_reviews: false,
        allow_review_requests: true,
        allow_blacklist: false,
        message_credit: 0,
        num_of_days_after_which_to_send_mails: 3,
        email_frequency: 'send_for_oldest_order',
        multiple_order_priority: 'ai_prioritize',
        template: {
            products: {
                body:
                    '<html>\n  <head>\n<meta name="viewport" content="width=device-width, initial-scale=1">\n  </head>\n<body>\n<table class="wrapper" style="max-width: 600px;width:100%;margin: 0 auto;">\n                <tbody>\n                  <tr>\n                    <td align="right"><a href="{{ view_in_browser }}" style="color: #7BA6F7;text-decoration: none;font-family:inherit;font-weight: 300;" target="_blank">View in browser</a></td></tr>\n                </tbody>\n              </table>\n<table class="wrapper" style="max-width: 600px;width:100%;margin: 0 auto;">\n                <tbody>\n                  <tr>\n                    <td>Hi {{ customer_name }},<br>\n<p style="line-height: 40px;">You\'ve recently bought <strong style="color:steelblue;">{{product_name}}</strong> at our store {{ business_name }}, what do you think about it?<br></p>\n<p style="line-height: 40px;">{{ review_form }}</p>\n<p style="line-height: 40px;">Thank you</p>\n<p>{{ business_name }}</p></td>\n                  </tr>\n                </tbody>\n              </table>\n</body>\n<html>\n',
                subject: 'Hi {{customer_name}}, How do you like our product?'
            },
            business: {
                body:
                    '<html>\n  <head>\n    <title></title>\n    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700" rel="stylesheet">\n    <link href="https://fonts.googleapis.com/css?family=Inconsolata:400" rel="stylesheet">\n    <meta name="viewport" content="width=device-width, initial-scale=1">\n  </head>\n  <body style="margin: 0;padding: 0;width: 100%;height: 100%;background:transparent;color: #34495E;font-family:inherit;font-weight: 300;">\n    <center>\n      <table class="master-wrapper" align="center" style="border-collapse: collapse;">\n        <tbody>\n          <tr>\n            <td align="center">\n              <table class="wrapper white-bg" style="border-collapse:collapse;width:650px;background:transparent;border-radius:2px;box-shadow:0 1px 4px 0 rgba(0, 0, 0,0.1);">\n                <tbody>\n                  <tr>\n                    <td class="content-wrapper" style="padding: 40px;border-top: 1px solid #f1f1f1;border-bottom: 1px solid #f1f1f1;background:transparent;">\n                      <table style="border-collapse:collapse;">\n                        <tbody>\n                          <tr>\n                            <td class="content-text" style="font-weight:300;letter-spacing:0.3px;line-height:30px;padding:0 0 30px 0;">\n                              Hi <a class="user" href="#" style="color:#7BA6F7;text-decoration:none;font-weight:600;color:#34495E;">{{ customer_name }}</a>,\n                            </td>\n                          </tr>\n                          <tr>\n                            <td class="content-text" style="padding:0 0 10px 0;font-size: 15px;font-weight: 100;letter-spacing: 0.3px;line-height: 30px;">\n                              You recently made a purchase from our store.\n                              We would love to get your feedback.\n                              Could you please take a minute to tell us about your experience?\n                            </td>\n                          </tr>\n                          <tr>\n                            <td class="review-card" style="padding: 50px 0px 10px;background:transparent;border-radius: 3px;box-shadow: 0 1px 4px 0 rgba(0, 0, 0,0.1);">\n                              {{ review_form }}\n                            </td>\n                          </tr>\n                          <tr>\n                            <td class="content-text" style="font-weight:300;letter-spacing:0.3px;line-height:30px;padding-top: 10px;">\n                              Thank you\n                            </td>\n                          </tr>\n                          <tr>\n                            <td class="content-text" style="font-weight:300;letter-spacing:0.3px;line-height:30px;">\n                              <a class="user" href="#" style="color:#7BA6F7;text-decoration:none;font-weight:600;color:#34495E;">{{ business_name }}</a>\n                            </td>\n                          </tr>\n                        </tbody>\n                      </table>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </center>\n  </body>\n</html>\n',
                subject: 'Hi {{customer_name}}, How do you like our business?'
            }
        },
        template_settings: {
            review_rating_star_color: '#FDC705',
            mso_review_rating_star_color: '#FDC705',
            review_rating_button_text_color: '#FFFFFF',
            review_rating_button_background_color: '#4466E4',
            multiple_product_template_button_text_color: '#FFFFFF',
            multiple_product_template_button_background_color: '#262A4F'
        },
        translations: {
            rating_text: 'Rating',
            review_text: 'Review',
            submit_review_text: 'Submit Review',
            title_text: 'Title',
            write_review_text: 'Write Review',
            thank_you_page_title_text: 'Thank You',
            thank_you_for_the_review_text: 'Thank you for the review',
            share_to_text: 'Share to',
            business_review_already_submitted_text:
                'Your review has already been submitted',
            upload_media_text:
                "We'd love to see any related photos or videos you have",
            drag_and_drop_media_text: 'Drag and drop an image or video',
            maximum_media_size_text: 'Keep image or video size max 1mb',
            publish_text: 'Publish',
            review_has_been_updated_with_media_text:
                'Your review has been updated with photos/videos successfully',
            maximum_media_files_text: 'You can only upload 5 files',
            review_not_updated_text: 'Sorry, your review could not be updated',
            or_browse_to_choose_file_text: 'or browse to choose file',
            file_exceeds_max_size_text: 'The size of this file exceeds 1MB',
            review_already_submitted_for_purchase_text:
                "You've already left a review for this purchase",
            emoji_brilliant_text: 'Brilliant',
            emoji_good_text: 'Good',
            emoji_okay_text: 'Okay',
            emoji_bad_text: 'Bad',
            emoji_not_good_text: 'Not good',
            experience_text: 'How was your overall experience using the item?',
            product_upsell_text: 'Similar products you might like'
        },
        has_order_syncing: false,
        id: '5fb6f2416a8eee6d4e4a2f02',
        updated_at: '2020-11-19T22:31:29.727Z',
        review_reminders: {
            status: 'D',
            schedule_days: [3]
        }
    })

const makeCustomer = (overrides = {}) => Object.assign({}, overrides, {
    business_id: faker.random.alphaNumeric(32),
    name: faker.name.firstName(),
    email: faker.internet.email(),
    phone: faker.phone.phoneNumber(),
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
})


const makeOrder = (overrides: any = {})=>{ 
    const customer = overrides.customer
    delete overrides.customer
    const lineItems = overrides.line_items || [{}, {}]
    delete overrides.line_items
    const order = Object.assign({}, overrides)
    const shopDomain = `${faker.internet.domainWord().toLowerCase()}.myshopify.com`
    const customerEmail = faker.internet.email()
    const firstName = faker.name.firstName()
    const lastName = faker.name.lastName()
    return Object.assign(
      {
        subtotal_price: faker.datatype.number({ min: 10, max: 1000 }) + '.00',
        buyer_accepts_marketing: true,
        cart_token: 'token',
        number: faker.datatype.number({ min: 100, max: 1000 }),
        currency: 'USD',
        processed_at: Date.now(),
        source: `${faker.lorem.word()}-${faker.datatype.number()}`,
        created_at_platform: Date.now(),
        updated_at_platform: Date.now(),
        shop_domain: shopDomain,
        shop_id: faker.random.alphaNumeric(23),
        order_id: faker.datatype.number({ min: 1000000, max: 9999999 }).toString(),
        financial_status: 'voided',
        total_line_items_price:
          faker.datatype.number({ min: 10, max: 1000 }) + '.00',
        email: customerEmail,
        line_items: lineItems.map(lineItem => Object.assign({
          requires_shipping: true,
          product_exists: true,
          sku: faker.random.alphaNumeric(12).toUpperCase(),
          title: lineItem.title || faker.commerce.productName(),
          variant_title: faker.commerce.productName(),
          product_id: lineItem.product_id || faker.datatype.number({ min: 1000000, max: 99999999 }),
          fulfillment_service: 'manual',
          total_discount: 0,
          fulfillment_status: faker.helpers.arrayElement(['fulfilled', null]),
          quantity: lineItem.quantity || faker.datatype.number({ min: 1, max: 4 }),
          price: lineItem.price || faker.datatype.number({ min: 300, max: 1000 }),
          taxable: true,
          properties: [],
          name: lineItem.name || faker.commerce.productName(),
          grams: faker.datatype.number({ min: 200, max: 10000 })
        })),
        total_price: 403,
        name: '#9999',
        order_number: 1234,
        fulfillment_status: 'pending',
        customer: customer !== null
          ? Object.assign({
            total_spent: '0.00',
            first_name: firstName,
            last_name: lastName,
            name: firstName + ' ' + lastName,
            orders_count: 0,
            updated_at_platform: Date.now(),
            id: faker.datatype.uuid(),
            created_at_platform: Date.now(),
            accepts_marketing: false,
            phone: faker.phone.phoneNumber(),
            state: 'disabled',
            email: customerEmail,
            verified_email: true
          }, customer)
          : undefined
      },
      order
    )

}

const makeReview = (overrides: any = {}) => Object.assign({}, {
    external_id: faker.datatype.uuid(),
    external_link: faker.internet.url(),
    message: faker.lorem.paragraph(),
    created_at_platform: faker.date.recent(30).toISOString(),
    updated_at_platform: new Date().toISOString(),
    rating: faker.datatype.number({ min: 1, max: 5 }),
    status: {
      type: 'published'
    },
    platform: 'yelp',
    source: 'yelp_review',
    reviewer: faker.random.alphaNumeric(12),
}, overrides)

export default {
    makeApm,
    makeCustomer,
    makeOrder,
    faker,
    makeReview
}