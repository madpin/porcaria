# Deployment Guide - Porca-Ria Website

## Deploy on Railway

Railway is a modern platform for deploying full-stack applications with minimal configuration.

### Prerequisites

1. Create a [Railway](https://railway.app) account
2. Install Railway CLI (optional):
   ```bash
   npm install -g @railway/cli
   ```

### Deployment Steps

#### Option 1: Deploy via Railway Dashboard (Recommended)

1. **Go to Railway Dashboard**
   - Visit [railway.app](https://railway.app)
   - Click "New Project"

2. **Connect Your Repository**
   - Choose "Deploy from GitHub repo"
   - Select your repository
   - Railway will auto-detect Next.js

3. **Configure Environment Variables**
   Add these variables in the Railway dashboard (Variables tab):

   ```
   # Required
   NODE_ENV=production
   NEXT_PUBLIC_SITE_URL=https://your-app.up.railway.app

   # Optional - For email functionality
   RESEND_API_KEY=re_xxxxx
   CONTACT_EMAIL=contato@porca-ria.com.br
   ```

4. **Deploy**
   - Railway will automatically build and deploy
   - Your app will be available at: `https://your-app.up.railway.app`

5. **Add Custom Domain (Optional)**
   - Go to Settings → Domains
   - Add your custom domain: `porca-ria.com.br`
   - Update DNS records as instructed

#### Option 2: Deploy via Railway CLI

1. **Login to Railway**
   ```bash
   railway login
   ```

2. **Initialize Project**
   ```bash
   railway init
   ```

3. **Add Environment Variables**
   ```bash
   railway variables set NODE_ENV=production
   railway variables set NEXT_PUBLIC_SITE_URL=https://your-app.up.railway.app
   ```

4. **Deploy**
   ```bash
   railway up
   ```

5. **Open Your App**
   ```bash
   railway open
   ```

### Configuration Files

The following files are configured for Railway deployment:

- **`railway.json`**: Railway-specific configuration
- **`nixpacks.toml`**: Build configuration for Nixpacks
- **`.railwayignore`**: Files to exclude from deployment
- **`package.json`**: Node.js engine requirements

### Environment Variables Reference

| Variable | Description | Required | Example |
|----------|-------------|----------|---------|
| `NODE_ENV` | Environment mode | Yes | `production` |
| `NEXT_PUBLIC_SITE_URL` | Your website URL | Yes | `https://porca-ria.com.br` |
| `RESEND_API_KEY` | Resend API key for emails | No | `re_xxxxx` |
| `CONTACT_EMAIL` | Email to receive contact forms | No | `contato@porca-ria.com.br` |

### Post-Deployment Checklist

- [ ] Verify all pages load correctly
- [ ] Test contact form submission
- [ ] Check responsive design on mobile
- [ ] Test navigation on all pages
- [ ] Verify images load properly
- [ ] Test form validation
- [ ] Add custom domain (if applicable)
- [ ] Set up SSL certificate (automatic on Railway)

### Monitoring & Logs

- **View Logs**: Railway Dashboard → Deployments → View Logs
- **Metrics**: Railway Dashboard → Metrics tab
- **Deployments**: Railway Dashboard → Deployments tab

### Custom Domain Setup

1. **In Railway Dashboard**:
   - Go to Settings → Domains
   - Click "Custom Domain"
   - Add `porca-ria.com.br`

2. **Update DNS Records**:
   Add the following records to your domain registrar:
   ```
   Type: CNAME
   Name: @
   Value: [provided by Railway]
   ```

3. **Wait for DNS Propagation** (can take up to 48 hours)

### Troubleshooting

**Build Fails**:
- Check logs in Railway dashboard
- Ensure all dependencies are in `package.json`
- Verify Node.js version compatibility

**Images Not Loading**:
- Check that images are in `/public/images/`
- Verify Next.js Image component configuration

**Contact Form Not Working**:
- Add `RESEND_API_KEY` environment variable
- Uncomment email code in `app/api/contact/route.ts`

**Page Not Found (404)**:
- Ensure all routes are properly configured
- Check that build completed successfully

### Support

- Railway Docs: https://docs.railway.app
- Railway Discord: https://discord.gg/railway
- Next.js Docs: https://nextjs.org/docs

---

## Alternative: Deploy on Vercel

If you prefer Vercel (recommended by Next.js):

```bash
npm install -g vercel
vercel login
vercel
```

Then follow the prompts. Vercel has excellent Next.js integration out of the box.
