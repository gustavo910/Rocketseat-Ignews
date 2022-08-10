import { loadStripe } from "@stripe/stripe-js";

export async function getStripeJs() {
    const publishableKey = process.env.STRIPE_PUBLIC_KEY;
    const stripeJs =await loadStripe(publishableKey);
    return stripeJs;
}