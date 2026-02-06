# 🚀 Quick Railway Setup Guide

## Step-by-Step Deployment

### 1️⃣ Push to GitHub

First, initialize git and push your code (if not already done):

```bash
git init
git add .
git commit -m "Initial commit - Porca-Ria website"
git branch -M main
git remote add origin https://github.com/madpin/porcaria.git
git push -u origin main
```

### 2️⃣ Deploy on Railway

1. **Go to [railway.app](https://railway.app)** and sign in with GitHub

2. **Click "New Project"**

3. **Select "Deploy from GitHub repo"**
   - Choose your `porcaria` repository (https://github.com/madpin/porcaria)
   - Railway will automatically detect it's a Next.js project

4. **Configure Environment Variables**

   Click on your project → Variables tab → Add these:

   ```
   NODE_ENV=production
   NEXT_PUBLIC_SITE_URL=https://porcaria.madpin.dev
   ```

   Optional (for email):
   ```
   RESEND_API_KEY=re_xxxxx
   CONTACT_EMAIL=contato@porca-ria.com.br
   ```

5. **Deploy!**
   - Railway will automatically build and deploy
   - Wait ~2-3 minutes for the first deployment
   - Your site will be live at: `https://porcaria.madpin.dev`

### 3️⃣ Custom Domain Setup

1. In Railway dashboard → Settings → Domains
2. Click "Custom Domain"
3. Enter: `porcaria.madpin.dev`
4. Update your DNS with the CNAME record provided by Railway:
   ```
   Type: CNAME
   Name: porcaria
   Value: [provided by Railway]
   TTL: 3600
   ```
5. Wait for DNS propagation (usually 5-10 minutes for subdomain)

## ✅ Your Site is Live!

Visit your site at the Railway URL. All pages should work:
- Homepage: `/`
- Sobre: `/sobre`
- Produtos: `/produtos`
- Contato: `/contato`

## 📊 Monitor Your Deployment

- **Logs**: Railway Dashboard → Deployments → View Logs
- **Metrics**: Railway Dashboard → Metrics
- **Redeploy**: Push to GitHub main branch

## 🔧 Enable Email (Optional)

To make the contact form actually send emails:

1. Sign up at [Resend.com](https://resend.com)
2. Get your API key
3. Add to Railway environment variables:
   ```
   RESEND_API_KEY=re_xxxxx
   ```
4. Update `app/api/contact/route.ts` - uncomment the email sending code
5. Push changes to GitHub (Railway auto-deploys)

## 🆘 Need Help?

- Railway Docs: https://docs.railway.app
- Railway Discord: https://discord.gg/railway

---

**That's it! Your Porca-Ria website is now live! 🎉🇧🇷🇮🇹**
