import { loadStripe } from "@stripe/stripe-js";

export async function getStripeJs() {
    const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY;
    const stripeJs =await loadStripe(publishableKey);
    return stripeJs;
}