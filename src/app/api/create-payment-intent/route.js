import { NextResponse } from "next/server";
import Stripe from "stripe";

// Server-side price map. NEVER trust amounts from the client.
// To change prices, update here AND update the Step1 tier UI in /get-started/page.js.
const PRICES = {
  essentials: { amount: 9900, label: "Verity Relocation — Essentials" },
  full_move: { amount: 19900, label: "Verity Relocation — Full Move" },
};

export async function POST(request) {
  try {
    if (!process.env.STRIPE_SECRET_KEY) {
      console.error("[create-payment-intent] STRIPE_SECRET_KEY not set");
      return NextResponse.json(
        { error: "Payment system not configured" },
        { status: 500 }
      );
    }

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: "2024-11-20.acacia",
    });

    const body = await request.json();
    const { tier, email, name, moveType, address } = body;

    if (!tier || !PRICES[tier]) {
      return NextResponse.json(
        { error: "Invalid tier selection" },
        { status: 400 }
      );
    }

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Valid email required" },
        { status: 400 }
      );
    }

    const price = PRICES[tier];

    const paymentIntent = await stripe.paymentIntents.create({
      amount: price.amount,
      currency: "usd",
      automatic_payment_methods: { enabled: true },
      receipt_email: email,
      description: price.label,
      metadata: {
        tier,
        customer_name: name || "",
        customer_email: email,
        move_type: moveType || "",
        service_address: address || "",
      },
    });

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
      amount: price.amount,
      label: price.label,
    });
  } catch (err) {
    console.error("[create-payment-intent] Error:", err.message);
    return NextResponse.json(
      { error: "Could not create payment" },
      { status: 500 }
    );
  }
}
