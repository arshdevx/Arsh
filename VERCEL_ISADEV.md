# Setting up `arshh.is-a.dev` → Vercel

Follow these steps to point `arshh.is-a.dev` at your Vercel-deployed portfolio.

## Prerequisites

- Your project is already deployed on Vercel (from the previous setup)
- You have a GitHub account

## Step 1 — Add the domain in Vercel

1. Go to your [Vercel Dashboard](https://vercel.com) → your project → **Settings** → **Domains**
2. Click **Add Domain** and enter `arshh.is-a.dev`
3. Disable the "Redirect arshh.is-a.dev to www.arshh.is-a.dev" toggle if it's checked
4. Click **Save** then **Continue manually**
5. Copy the **TXT verification value** shown — you'll need it below

> Vercel will show you the A record it expects (usually `216.198.79.1`) and a TXT verification record. Take note of both.

## Step 2 — Fork the is-a-dev register repo

1. Go to [github.com/is-a-dev/register](https://github.com/is-a-dev/register)
2. Click **Fork** (top-right)

## Step 3 — Create the domain file

In your forked repo, create `domains/arshh.json`:

```json
{
    "owner": {
        "username": "arshdevx",
        "email": "arshcodes1@gmail.com"
    },
    "records": {
        "A": ["216.198.79.1"]
    }
}
```

> Replace the A record if Vercel gave you a different one.

## Step 4 — Create the verification file

Create `domains/_vercel.arshh.json`:

```json
{
    "owner": {
        "username": "arshdevx",
        "email": "arshcodes1@gmail.com"
    },
    "records": {
        "TXT": "vc-domain-verification=PASTE_YOUR_VERIFICATION_STRING_HERE"
    }
}
```

Replace `PASTE_YOUR_VERIFICATION_STRING_HERE` with the TXT value from Step 1.

## Step 5 — Open a Pull Request

1. Commit both files to your fork
2. Open a PR against `is-a-dev/register` (base repo)
3. (Optional) Join their [Discord](https://discord.gg/is-a-dev-830872854677422150) and post your PR link in `#pull-requests` once

## Step 6 — Wait & verify

- Once merged (usually within a few hours to a day), `arshh.is-a.dev` will point to your Vercel site
- Clear your DNS cache if it doesn't resolve immediately
- Vercel will provision a TLS certificate automatically
