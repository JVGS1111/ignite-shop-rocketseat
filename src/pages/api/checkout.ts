import { stripe } from "@/src/lib/stripe";
import { NextApiRequest, NextApiResponse } from "next";

interface ReqBodyProps {
    products: {
        priceId: string
    }[]
}

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    const { products } = req.body as ReqBodyProps;

    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed." });
    }

    if (!products || !Array.isArray(products) || products.length == 0) {
        return res.status(400).json({ error: "Price not found." });
    }

    const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`;
    const cancelUrl = `${process.env.NEXT_URL}/`;

    const productList = products.map((item) => {
        return {
            price: item.priceId,
            quantity: 1
        }
    })

    const checkoutSession = await stripe.checkout.sessions.create({
        success_url: successUrl,
        cancel_url: cancelUrl,
        mode: "payment",
        line_items: productList
    });

    return res.status(201).json({
        checkoutUrl: checkoutSession.url
    })
}