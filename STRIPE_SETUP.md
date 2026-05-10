# Stripe Integration — Setup Checklist

This guide gets the Stripe integration live on `verityrelocation.com`. Follow it in order.

---

## What's been built

- **`/api/create-payment-intent`** — server-side route that creates a Stripe PaymentIntent. Validates tier against a server-side price map (no trusting client amounts).
- **`/api/stripe-webhook`** — webhook handler that listens for `payment_intent.succeeded` and logs the trigger points for ISP dispatch and notarization invite (real dispatch wiring TBD when Polsia is connected).
- **`/get-started`** — intake page now has tier selection in Step 1 and real Stripe Elements (`<PaymentElement>`) in Step 2. Old fake card inputs are gone.

---

## Step 1 — Stripe Dashboard

> Stripe is already created under Verity Agentic Services LLC, test mode active. Confirm the items below.

1. Sign in at https://dashboard.stripe.com — confirm the account name shows **Verity Agentic Services LLC** in the top-left.
2. Confirm the **Test mode** toggle (top-right) is **ON** for now. Do everything below in test mode first.
3. **Rotate your test keys** (since the previous ones were exposed):
   - Go to **Developers → API keys**
   - Click **Roll key** next to the existing **Secret key** — confirm
   - Copy the new **Publishable key** (`pk_test_…`) and **Secret key** (`sk_test_…`) — paste them into a temporary notes app for the next step
4. Products are **not strictly required** for this integration (we use PaymentIntents with dynamic amounts), but for clean reporting it's worth creating them:
   - **Products → Add product** — Name: `Verity Relocation — Essentials`, Price: `$99.00 USD`, One-time
   - **Products → Add product** — Name: `Verity Relocation — Full Move`, Price: `$199.00 USD`, One-time
   - These are display-only; the code uses the server-side price map in `/api/create-payment-intent/route.js`.

---

## Step 2 — Local development (optional but recommended)

If you want to test on your Mac before pushing to Vercel:

1. In your `verity-relocation` folder on your Desktop, create a file called `.env.local` (it must start with the dot)
2. Copy the contents of `.env.local.example` into it
3. Replace the three `REPLACE_ME` values with your actual test keys (leave `STRIPE_WEBHOOK_SECRET` for now — we'll fill it in below)
4. Run `npm install` then `npm run dev` and visit http://localhost:3000/get-started
5. Use Stripe's test card: `4242 4242 4242 4242`, any future date, any CVC, any ZIP

The `.env.local` file is in `.gitignore` and will never be committed to GitHub.

### Local webhook testing (only if you want to test webhooks locally)

1. Install the Stripe CLI: `brew install stripe/stripe-cli/stripe`
2. Run `stripe login` and authorize
3. In a separate terminal: `stripe listen --forward-to localhost:3000/api/stripe-webhook`
4. The CLI prints a `whsec_…` secret — paste it into `.env.local` as `STRIPE_WEBHOOK_SECRET`
5. Trigger a test event: `stripe trigger payment_intent.succeeded`
6. Check your terminal — you should see `[stripe-webhook] payment_intent.succeeded` and the two trigger logs

---

## Step 3 — Vercel environment variables

This is how the live site gets its Stripe keys. **Never put keys in code.**

1. Go to https://vercel.com → your `verity-relocation` project
2. **Settings → Environment Variables**
3. Add three variables (one at a time):

| Name | Value | Environments |
|------|-------|--------------|
| `STRIPE_SECRET_KEY` | `sk_test_…` (your test secret key) | Production, Preview, Development |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | `pk_test_…` (your test publishable key) | Production, Preview, Development |
| `STRIPE_WEBHOOK_SECRET` | (leave blank for now — fill in after Step 4) | Production, Preview, Development |

4. Click **Save** for each one.
5. After adding the keys, you must **redeploy** for them to take effect:
   - Go to **Deployments**, click the most recent one, then click **⋯ → Redeploy**

> **When you go live with real money:** repeat this step with your `sk_live_…` and `pk_live_…` keys, but only set them on the **Production** environment. Keep test keys on Preview and Development.

---

## Step 4 — Production webhook (after first deploy succeeds)

Once your site is deployed and the API routes are live, set up the webhook so Stripe can notify your server about successful payments:

1. Go to https://dashboard.stripe.com/test/webhooks
2. Click **+ Add endpoint**
3. **Endpoint URL:** `https://verityrelocation.com/api/stripe-webhook`
4. **Events to send** — click "Select events" and check these three:
   - `payment_intent.succeeded`
   - `payment_intent.payment_failed`
   - `charge.refunded`
5. Click **Add endpoint**
6. On the resulting page, click **Reveal** under "Signing secret" and copy the `whsec_…` value
7. Go back to Vercel → Settings → Environment Variables → edit `STRIPE_WEBHOOK_SECRET` → paste the value → save
8. **Redeploy** Vercel one more time (Deployments → ⋯ → Redeploy)

To verify it's working: in the Stripe webhook page, click your endpoint, then **Send test webhook** → pick `payment_intent.succeeded` → **Send**. You should see a `200 OK` response. Check Vercel **Deployments → [latest] → Functions → /api/stripe-webhook** to see the logged trigger points.

---

## Step 5 — Test the live flow

1. Visit `https://verityrelocation.com/get-started`
2. Pick a tier, fill in the form, click Continue
3. On the payment step, use test card `4242 4242 4242 4242`
4. Confirm:
   - Payment succeeds and you advance to the e-sign step
   - Stripe Dashboard shows the payment with the correct metadata (tier, customer email, address)
   - Vercel function logs show `[stripe-webhook] payment_intent.succeeded` and the two `[trigger:…]` logs

---

## Going live with real money

When you're ready to accept real payments:

1. Stripe Dashboard → toggle **Test mode** OFF (top-right)
2. **Developers → API keys** — copy the new `sk_live_…` and `pk_live_…` keys
3. **Developers → Webhooks** — create the same endpoint as Step 4 but in live mode; copy the new `whsec_…`
4. Vercel → Environment Variables → for **Production only**, replace all three values with the live versions
5. Redeploy
6. Run a $1 test transaction with your own card to confirm the live flow works end-to-end, then refund yourself in Stripe

---

## Future wiring (not done yet)

The webhook currently logs trigger points but doesn't fire real actions. When ready:

- **`[trigger:isp-dispatch]`** in `/api/stripe-webhook/route.js` — replace the `console.log` with a call to your Polsia ISP scheduling agent
- **`[trigger:notarization-invite]`** in `/api/stripe-webhook/route.js` — replace with calls to Notarize.com (or Proof.com) and DocuSign to send the invite + envelope
- **Notarize.com webhook** (separate file, not built yet) — when notarization completes, fires utility activation agents on Polsia
- **`charge.refunded` handler** — within the 24-hour revocation window, halt any in-flight agents

---

## Pricing changes

If you change pricing, update **two places** at once:

1. `/src/app/api/create-payment-intent/route.js` — the `PRICES` object at the top
2. `/src/app/get-started/page.js` — the `TIERS` array near the top

Server is the source of truth — the client UI is for display only. Mismatched prices will fail loudly with an "Invalid tier selection" error rather than silently charging the wrong amount.
