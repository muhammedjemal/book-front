// src/app/api/create-checkout-session/route.ts
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe("sk_test_your_test_key_here");

export async function POST(req: Request) {
  const cartItems = await req.json();

  try {
    const lineItems = cartItems.map((item: any) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name:
            item.pathname === "/products/2"
              ? "Ethiopia as the Mother of Africa"
              : item.pathname === "/products/1"
              ? "Sacred Procession"
              : item.pathname === "/products/3"
              ? "The Journey for Water"
              : "Not Specified",
          metadata: {
            size: item.selectedSize,
            printNumber: item.selectedNumberVar,
            frameType: item.variant,
          },
        },
        unit_amount: Math.round(item.amountOfMoney * 100), // Stripe uses cents
      },
      quantity: item.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
      line_items: lineItems,
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_URL}/cancel`,
    });

    return NextResponse.json({ sessionId: session.id });
  } catch (error: any) {
    console.error("Error creating checkout session:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
