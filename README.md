# 🌌 CoupleSky — Official Website & Landing Page

Official web landing page and legal documentation portal for **CoupleSky** (`https://couplesky.app`), the private digital universe crafted exclusively for couples.

---

## ✨ Features & Architecture

- **Next.js 14 (App Router) with Static HTML Export (`output: 'export'`)**: Ultra-fast performance, zero server overhead, pre-rendered static HTML files for perfect SEO and instant edge distribution.
- **Tailwind CSS & Cosmic Design System**: Deep space palettes (`#070913`, `#0D1224`), warm rose-gold / champagne glowing highlights, glassmorphic panels, and starfield animations.
- **Bilingual Experience (TR 🇹🇷 / EN 🇺🇸)**: Built-in instant language switcher across all pages.
- **Interactive In-App Phone Mockup**: Live simulation of CoupleSky's countdowns, sealed letters, star atlas, and widgets.
- **100% App Store & Google Play Compliant Legal Suite**:
  - `/privacy`: Comprehensive Privacy Policy (GDPR & KVKK compliant)
  - `/terms`: Terms of Service (EULA & Apple 3.1.2 subscription terms)
  - `/kvkk`: KVKK Clarification Text (Law No. 6698)
  - `/consent`: Explicit Consent Declaration
  - `/subscription`: Subscription, Pricing, and Refund Policy
  - `/support`: Customer Support Desk with direct integration to `support@couplesky.app` and `destek@couplesky.app`

---

## 🚀 Cloudflare Pages Deployment (Step-by-Step)

Because `couplesky.app` is registered and managed on **Cloudflare**, deploying takes less than 60 seconds:

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. In the left navigation, click **Workers & Pages** ➡️ **Create application**
3. Select the **Pages** tab and click **Connect to Git**
4. Choose the repository: **`memirhantasci/couplesky-web`**
5. Configure Build Settings:
   - **Framework preset:** `Next.js (Static HTML Export)` or `None`
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
   - **Node.js version (Environment variable, optional):** `NODE_VERSION: 20` (or `22`)
6. Click **Save and Deploy**
7. Once deployed, click **Custom domains** ➡️ **Set up a custom domain** ➡️ Enter:
   - `couplesky.app` (and `www.couplesky.app`)
8. Cloudflare will automatically activate the SSL certificate and bind the site immediately!

---

## 💻 Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build static production export
npm run build
```

Open [http://localhost:3000](http://localhost:3000) with your browser to view the site.
