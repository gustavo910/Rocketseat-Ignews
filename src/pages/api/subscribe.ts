import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../services/stripe";
import { getSession } from "next-auth/react";


// eslint-disable-next-line import/no-anonymous-default-export
export default async function handle(req: NextApiRequest, res: NextApiResponse){

    if (req.method === 'POST') {
        const session = await getSession({ req });
        const stripeCustomer = await stripe.customers.create({
            email: session.user.email,
            //metadata
        })

        const StripeCheckoutSession = await stripe.checkout.sessions.create({
            customer: stripeCustomer.id,
            payment_method_types: ['card'],
            billing_address_collection: 'required',
            line_items: [
                {
                    price: 'price_1LTTgiFPddlSYdGJ3AIS9Zlf',
                    quantity: 1
                },
            ],
            mode: 'subscription',
            allow_promotion_codes: true,
            success_url: process.env.STRIPE_SUCCESS_URL,
            cancel_url: process.env.STRIPE_CANCEL_URL,
        })
        return res.status(200).json({ sessionId: StripeCheckoutSession.id })
    } else {
        res.setHeader('Allow', 'POST')
        res.status(405).end('Methode not allowed')
    }
}