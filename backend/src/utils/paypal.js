import axios from 'axios';
import { Variables } from '../config/variables.js';

// Get the access token from PayPal to access the sandbox account
async function generateAccessToken() {
    const res = await axios({
        url: Variables.PAYPAL_BASE_URL + '/v1/oauth2/token',
        method: 'POST',
        data: 'grant_type=client_credentials',
        auth: {
            username: Variables.PAYPAL_CLIENT_ID,
            password: Variables.PAYPAL_SECRET,
        }
    });

    return res.data.access_token;
}

// Create an order
export async function createOrder(totalPrice) {
    const accessToken = await generateAccessToken();

    const res = await axios({
        url: Variables.PAYPAL_BASE_URL + '/v2/checkout/orders',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + accessToken,
        },
        data: JSON.stringify({
            intent: "CAPTURE",
            purchase_units: [
                {
                    items: [
                        {
                            name: 'Node.js Complete Course',
                            description: 'Node.js Complete Course with Express and MongoDB',
                            quantity: 1,
                            unit_amount: {
                                currency_code: 'USD',
                                value: totalPrice,
                            }
                        }
                    ],
                    amount: {
                        currency_code: 'USD',
                        value: totalPrice,
                        breakdown: {
                            item_total: {
                                currency_code: 'USD',
                                value: totalPrice,
                            }
                        }
                    }
                }
            ],
            application_context: {
                // important when integrate
                return_url: Variables.BASE_URL + '/api/purchase/complete-order',
                cancel_url: Variables.BASE_URL + '/api/purchase/cancel-order',
                shipping_preference: "NO_SHIPPING",
                user_action: 'PAY_NOW',
                brand_name: "BLAST.com"
            }
        })
    });

    return res.data.links.find(link => link.rel === 'approve').href;
}

// Capture payment
export async function capturePayment(orderId) {
    const accessToken = await generateAccessToken();

    const res = await axios({
        url: Variables.PAYPAL_BASE_URL + `/v2/checkout/orders/${orderId}/capture`,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + accessToken,
        }
    });

    return res.data;
}
