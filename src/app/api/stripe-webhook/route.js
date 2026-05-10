import { NextResponse } from "next/server";
import Stripe from "stripe";

// Stripe requires the raw body to verify signatures, so we disable Next's body parsing.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request) {
  if (!process.env.STRIPE_SECRET_KEY || !process.env.STRIPE_WEBHOOK_SECRET) {
    console.error("[stripe-webhook] Missing STRIPE_SECRET_KEY or STRIPE_WEBHOOK_SECRET");
    return NextResponse.json({ error: "Webhook not configured" }, { status: 500 });
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2024-11-20.acacia",
  });

  const sig = request.headers.get("stripe-signature");
  const rawBody = await request.text();

  let event;
  try {
    event = stripe.webhooks.constructEvent(
      rawBody,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error("[stripe-webhook] Signature verification failed:", err.message);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  // Handle the event
  switch (event.type) {
    case "payment_intent.succeeded": {
      const pi = event.data.object;
      const tier = pi.metadata?.tier;
      const email = pi.metadata?.customer_email;
      const name = pi.metadata?.customer_name;
      const moveType = pi.metadata?.move_type;
      const address = pi.metadata?.service_address;

      console.log("[stripe-webhook] payment_intent.succeeded", {
        id: pi.id,
        amount: pi.amount,
        tier,
        email,
        name,
        moveType,
        address,
      });

      // -----------------------------------------------------------------
      // TRIGGER POINT 1: ISP agent dispatch (fires on payment confirmation)
      // -----------------------------------------------------------------
      // TODO: Wire this to the Polsia agent platform once integrated.
      // Per architecture: ISP scheduling agents fire immediately on payment;
      // they do NOT require notarization (no SSN/DL needed for ISP install).
      console.log("[trigger:isp-dispatch]", {
        action: "schedule_isp_install",
        customer: { email, name },
        address,
        tier,
        notes: "ISP agents fire on payment success per Verity architecture.",
      });

      // -----------------------------------------------------------------
      // TRIGGER POINT 2: Notarization invitation (e-sign LPOA gate)
      // -----------------------------------------------------------------
      // TODO: Send Notarize.com / Proof.com invite + DocuSign envelope.
      // Utility agent dispatch is gated on notarization completion, not
      // on this event. Notarize webhook (separate) will trigger utilities.
      console.log("[trigger:notarization-invite]", {
        action: "send_notarize_invite",
        customer: { email, name },
        notes: "Utility agents will dispatch only after notarize webhook fires.",
      });

      break;
    }

    case "payment_intent.payment_failed": {
      const pi = event.data.object;
      console.warn("[stripe-webhook] payment_intent.payment_failed", {
        id: pi.id,
        email: pi.metadata?.customer_email,
        last_error: pi.last_payment_error?.message,
      });
      // TODO: Send retry email or notify ops.
      break;
    }

    case "charge.refunded": {
      const charge = event.data.object;
      console.log("[stripe-webhook] charge.refunded", {
        id: charge.id,
        amount: charge.amount_refunded,
        payment_intent: charge.payment_intent,
      });
      // TODO: If within 24-hour revocation window, halt any in-flight agents.
      break;
    }

    default:
      console.log("[stripe-webhook] Unhandled event type:", event.type);
  }

  return NextResponse.json({ received: true });
}
