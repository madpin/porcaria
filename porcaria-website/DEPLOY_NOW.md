# 🚀 Deploy Porca-Ria to Railway NOW!

## Your Project Details
- 🌐 **Domain**: https://porcaria.madpin.dev
- 📦 **GitHub Repo**: https://github.com/madpin/porcaria
- 📍 **Location**: Cambuci, São Paulo, Brasil
- 🇮🇹 **Tradition**: Italian heritage from José

---

## ⚡ Quick Deploy (5 minutes)

### Step 1: Push to GitHub

```bash
cd /Users/tpinto/madpin/porcaria/porcaria-website

# Initialize git (if not already done)
git init
git add .
git commit -m "Porca-Ria website - Italian tradition in Cambuci, São Paulo"
git branch -M main

# Add remote and push
git remote add origin https://github.com/madpin/porcaria.git
git push -u origin main
```

> **Note**: We've configured `.npmrc` to use the public npm registry and regenerated `package-lock.json`. This ensures Railway can install all dependencies without authentication issues. See `RAILWAY_FIX.md` for details.

### Step 2: Deploy on Railway

1. **Open Railway**: https://railway.app
   - Sign in with GitHub

2. **Create New Project**
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose: **madpin/porcaria**

3. **Add Environment Variables**

   In Railway dashboard → Variables tab, add:

   ```
   NODE_ENV=production
   NEXT_PUBLIC_SITE_URL=https://porcaria.madpin.dev
   ```

4. **Wait for Build** (~2-3 minutes)
   - Railway will auto-detect Next.js
   - Build and deploy automatically

### Step 3: Configure Custom Domain

1. In Railway dashboard → Settings → Domains
2. Click "Custom Domain"
3. Enter: `porcaria.madpin.dev`
4. Copy the CNAME value provided
5. Add to your DNS (madpin.dev):
   ```
   Type: CNAME
   Name: porcaria
   Value: [Railway provides this]
   TTL: 3600
   ```
6. Save DNS settings
7. Wait ~5-10 minutes for DNS propagation

### Step 4: Test Your Site! 🎉

Visit: **https://porcaria.madpin.dev**

Check all pages:
- ✅ Homepage: https://porcaria.madpin.dev/
- ✅ Sobre: https://porcaria.madpin.dev/sobre
- ✅ Produtos: https://porcaria.madpin.dev/produtos
- ✅ Contato: https://porcaria.madpin.dev/contato

---

## 📧 Optional: Enable Email (Later)

To make the contact form send emails:

1. Sign up at https://resend.com
2. Get your API key
3. Add to Railway Variables:
   ```
   RESEND_API_KEY=re_xxxxx
   CONTACT_EMAIL=contato@porca-ria.com.br
   ```
4. In your code, edit `app/api/contact/route.ts`:
   - Uncomment the Resend email code (lines ~13-28)
5. Commit and push:
   ```bash
   git add .
   git commit -m "Enable email functionality"
   git push
   ```
6. Railway will auto-deploy

---

## 🎯 What You Have

✅ Modern Next.js 16 website
✅ Brazilian Portuguese language
✅ Italian tradition story (José's heritage)
✅ Location: Cambuci, São Paulo
✅ 4 pages: Home, About, Products, Contact
✅ Responsive design (mobile/tablet/desktop)
✅ Contact form with validation
✅ SEO optimized
✅ Production-ready build tested
✅ Railway deployment configured

---

## 📞 Support

- **Railway Docs**: https://docs.railway.app
- **Railway Discord**: https://discord.gg/railway
- **Next.js Docs**: https://nextjs.org/docs

---

## 🎉 That's It!

Your Porca-Ria website will be live at:
### **https://porcaria.madpin.dev** 🇧🇷🇮🇹

Bringing Italian tradition to Cambuci, São Paulo!
