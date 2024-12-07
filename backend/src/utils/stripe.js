import { Variables } from '../config/variables.js';
import Stripe from 'stripe';

export const stripe = new Stripe(Variables.STRIPE_SECRET_KEY);

export async function createOrderByCard(ServiceName, totalPrice) {

    const session = await stripe.checkout.sessions.create({
        line_items: [
            {
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: ServiceName
                    },
                    unit_amount: totalPrice * 100
                },
                quantity: 1
            },         
        ],
        mode: 'payment',
        success_url: `${Variables.BASE_URL}/api/purchase/complete?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${Variables.BASE_URL}/api/purchase/cancel`
    })

    return session.url;
}
