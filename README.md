# PULSIVE Landing Page

Premium landing page for [PULSIVE](https://github.com/JEPPE9103/PulsiveLandingpage) — real-time city discovery in Stockholm.

**See the pulse. Feel the vibe.**

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

Beta signup works locally without extra config — submissions are logged to the server console in development.

## Environment variables

For production beta signup, configure at least one storage method in Vercel (or `.env.local`):

| Variable | Description |
|----------|-------------|
| `WAITLIST_WEBHOOK_URL` | POST endpoint (Airtable automation, Make, Zapier, Google Apps Script, etc.) |
| `RESEND_API_KEY` | Resend API key for email notifications |
| `WAITLIST_NOTIFY_EMAIL` | Email address to receive signup alerts |
| `RESEND_FROM` | Optional sender (default: `PULSIVE <onboarding@resend.dev>`) |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL (default: `https://pulsive.app`) |

Without these, the waitlist API returns an error in production.

## Deploy on Vercel

1. Push this repo to GitHub
2. Import the project at [vercel.com/new](https://vercel.com/new)
3. Select **JEPPE9103/PulsiveLandingpage**
4. Add environment variables for beta signup
5. Vercel auto-detects Next.js — click **Deploy**

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Local development |
| `npm run build` | Production build |
| `npm run start` | Run production build |
