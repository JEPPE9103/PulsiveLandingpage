# PULZIVE Landing Page

Premium landing page for [PULZIVE](https://pulzive.com) — real-time city discovery in Stockholm.

**See the pulse. Feel the vibe.**

**Production domain:** https://pulzive.com  
**Contact:** hello@pulzive.com

## Stack

- [Next.js 15](https://nextjs.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

In development, waitlist signups are accepted and logged to the server console even without env vars.

## Environment variables (production)

Configure at least **one durable storage method** in Vercel:

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | Recommended | `https://pulzive.com` |
| `WAITLIST_WEBHOOK_URL` | Strongly recommended | POST endpoint (Airtable / Make / Zapier / Sheets) — permanent lead store |
| `RESEND_API_KEY` | Optional | Resend API key |
| `RESEND_AUDIENCE_ID` | Optional | Resend audience for durable contact storage |
| `WAITLIST_NOTIFY_EMAIL` | Optional | e.g. `hello@pulzive.com` — email alert per signup |
| `RESEND_FROM` | Optional | Verified sender, e.g. `PULZIVE <hello@pulzive.com>` |

**Production rule:** without webhook and/or Resend audience/notify, waitlist returns 503.

Recommended minimum for launch:

```
NEXT_PUBLIC_SITE_URL=https://pulzive.com
WAITLIST_WEBHOOK_URL=https://hooks.zapier.com/...
RESEND_API_KEY=re_...
WAITLIST_NOTIFY_EMAIL=hello@pulzive.com
RESEND_FROM=PULZIVE <hello@pulzive.com>
```

## Deploy on Vercel

1. Import the GitHub repo **JEPPE9103/PulsiveLandingpage**
2. Set environment variables (Production)
3. Add custom domain `pulzive.com`
4. Deploy

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Local development |
| `npm run build` | Production build |
| `npm run start` | Run production build |
| `npm run lint` | Lint |
