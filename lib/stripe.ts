import "server-only";

import Stripe from "stripe";

export const stripe = new Stripe(process.env.NEXT_STRIPE_SECRET_KEY as string);
