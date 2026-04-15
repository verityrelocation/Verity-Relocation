# Verity Relocation — Deployment Guide
## Step-by-step instructions to get VerityRelocation.com live

---

## What you have

A complete Next.js website with 5 pages:
- **/** — Homepage
- **/how-it-works** — Process explainer
- **/services** — Services + pricing ($199 flat fee)
- **/faq** — FAQ + trust center
- **/get-started** — 3-step intake flow

---

## Step 1: Upload to GitHub

### Using GitHub Desktop (recommended)

1. Open **GitHub Desktop** on your Mac
2. Click **"Create a New Repository on your Local Drive..."**
3. Fill in:
   - **Name:** `verity-relocation`
   - **Local Path:** Click "Choose..." and select your Desktop
   - Leave everything else as default
   - Click **"Create Repository"**
4. A folder called `verity-relocation` now exists on your Desktop — it will be mostly empty
5. **Open that folder in Finder** (right-click the repo name in GitHub Desktop → "Show in Finder")
6. **Unzip the downloaded project zip file** and copy ALL its contents (package.json, next.config.js, src folder, .gitignore, etc.) INTO the `verity-relocation` folder on your Desktop
7. Go back to **GitHub Desktop** — you should see a list of changed files on the left
8. At the bottom left, type a summary: `Initial site` and click **"Commit to main"**
9. Click the blue **"Publish repository"** button at the top
10. Uncheck "Keep this code private" (Vercel needs to see it on free tier), then click **"Publish Repository"**

Your code is now on GitHub.

### If GitHub Desktop doesn't work

1. Go to **github.com** in your browser
2. Click the **+** icon (top right) → **"New repository"**
3. Name: `verity-relocation`
4. Set to **Public**
5. Click **"Create repository"**
6. On the next page, click **"uploading an existing file"**
7. Drag all the project files from the unzipped folder into the upload area
8. Click **"Commit changes"**

---

## Step 2: Deploy on Vercel

1. Go to **vercel.com** and sign in with your GitHub account
2. Click **"Add New..."** → **"Project"**
3. You should see `verity-relocation` in your repository list — click **"Import"**
4. Vercel auto-detects it's a Next.js project. Don't change any settings.
5. Click **"Deploy"**
6. Wait 1-2 minutes. Vercel will build and deploy your site.
7. When it's done, you'll see a celebration screen with a preview of your site
8. Your site is now live at `verity-relocation.vercel.app`

---

## Step 3: Connect your GoDaddy domain

1. In Vercel, go to your project → **"Settings"** → **"Domains"**
2. Type `verityrelocation.com` and click **"Add"**
3. Vercel will show you DNS records to add. You'll see something like:
   - **Type:** A — **Value:** 76.76.21.21
   - **Type:** CNAME — **Name:** www — **Value:** cname.vercel-dns.com
4. Open a new tab and go to **godaddy.com** → sign in → **"My Products"** → **DNS** for verityrelocation.com
5. Find the existing **A record** (pointing to GoDaddy's default IP) — click the pencil/edit icon and change the value to **76.76.21.21**
6. Find or add a **CNAME record** with name **www** and value **cname.vercel-dns.com**
7. Save both changes
8. Go back to Vercel and click **"Refresh"** — it may take 5-30 minutes for DNS to update
9. Once Vercel shows a green checkmark, your site is live at **VerityRelocation.com**

SSL (the lock icon / https) is automatic — Vercel handles this for you.

---

## Step 4: Make future updates

Whenever you want to change something:
1. We update the code together in Claude
2. I give you the updated files
3. You replace the files in your `verity-relocation` folder on your Desktop
4. Open GitHub Desktop — it shows what changed
5. Type a summary like `Updated pricing` and click **"Commit to main"**
6. Click **"Push origin"**
7. Vercel automatically detects the change and redeploys in ~60 seconds

That's it. No terminal commands, no server management.

---

## What comes later (not needed for launch)

These require a developer for a few hours each:
- **Stripe integration** — Replace the prototype payment UI with a real Stripe hosted checkout redirect
- **DocuSign/HelloSign** — Wire up the e-sign authorization to a real signing service
- **Skyflow vault** — Connect the SSN/DL fields to Skyflow's direct tokenization API
- **Notarize.com** — Set up the redirect and webhook for notarization completion
- **WhatsApp Business API** — Connect status update notifications

For the Founding Client Cohort (June 1-30), you can run the intake manually:
1. Client fills out the form on the website
2. You receive the submission via email (we can set this up with a simple form handler)
3. You process the payment via a Stripe payment link you text/email to the client
4. You send them the DocuSign for the TAO
5. You handle the provider activations manually with their SSN/DL

This gives you a live, professional website that collects leads while you validate the service before investing in full automation.
